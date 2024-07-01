const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { produceKafkaMessage } = require("../helpers/kafkaProducer");
const { generateOTP } = require("../helpers/otpGenerator");
const redis=require('../helpers/redis')

// jwt configs
const generateToken = (secret, payload, expiry) => {
	const options = { expiresIn: expiry };
	const token = jwt.sign(payload, secret, options);
	return token;
};

//signpup a new user
const signupUserController =  async (req, res, next) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		if (existingUser) return next({ status: 409, message: "User already exists" });
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const newUserObj = new User({
			...req.body,
			password: req.body.password,
		});
		const savedUser = await newUserObj.save();
		const { username, email, role, _id } = savedUser;
        //generate otp
        const otp = generateOTP(6);
        console.log("otp generated :", otp);
        //store otp in REDIS DB
        redis.set(email, otp);
        redis.expire(email, 60);
        redis.set(`det_${email}`, JSON.stringify({username, email, role, userID:_id}));
        
        //send otp to the email service below

		//returning a reponse
		return res
			.status(201)
			.json({success: true, message: "account created", data: {username, email}});
	} catch (error) {
		next(error.message);
	}
}

//login an existing user
const loginUserController =  async (req, res, next) => {
	try {
		console.log(req.body);
		const existingUser = await User.findOne({
			email: req.body.email,
			loginType: "local",
		});
		console.log(existingUser);
		if (!existingUser)
			return next({ status: 401, message: "Invalid login credentials" });
		let isPasswordValid = await bcrypt.compare(
			req.body?.password,
			existingUser?.password
		);
		if (!isPasswordValid)
			return next({ status: 401, message: "Invalid login credentials" });
		else {
			const { username, email, role, _id } = existingUser;
			//sign a jwt token
			const payload = { email, role, userID: _id };
			const accessToken = generateToken(
				process.env.ACCESS_TOKEN_SECRET,
				payload,
				"10s"
			);
			const refreshToken = generateToken(
				process.env.REFRESH_TOKEN_SECRET,
				payload,
				"10s"
			);
			//returning a reponse
			return res
				.cookie("refreshToken", refreshToken, {httpOnly: true})
				.status(201)
				.json({
					success: true,
					message: "Login success",
					data: {
						token: accessToken,
						username,
						email,
						profilePicture: existingUser.profilePicture,
						role
					},
				});
		}
	} catch (error) {
		next(error.message);
	}
};

//login an existing user
const signupGoogleUserController =  async (req, res, next) => {
	try {
		const existingUser = await User.findOne({ email: req.body.email });
		//if user is not found in db, login user
		if (!existingUser) {
			const newUserObj = new User({
				...req.body,
				isEmailVerified: true,
				loginType: "google",
				profilePicture: req.body.picture,
			});
			const savedUser = await newUserObj.save();
			const { email } = savedUser;

			//send a temporary token encapulating user email
			const payload = { email };
			const temporaryToken = generateToken(process.env.TEMP_TOKEN_SECRET, payload, process.env.TEMP_TOKEN_EXP_TIME);
			return res
                .status(201)
				.json({success: false, message: "select your role next", data: { tempToken: temporaryToken} });
		} 
        else if (existingUser && existingUser.loginType === "local") {
			return next({ status: 401, message: "Try other auth options" });
		}
        else if (existingUser && existingUser.loginType === "google") {
			const payload = {
				email: existingUser?.email,
				role: existingUser?.role,
				userID: existingUser?._id,
			};
			const accessToken = generateToken(process.env.ACCESS_TOKEN_SECRET, payload, process.env.AX_TOKEN_EXP_TIME);
			const refreshToken = generateToken(process.env.REFRESH_TOKEN_SECRET, payload, process.env.RF_TOKEN_EXP_TIME);

			//returning a reponse
			return res
				.status(201)
				.cookie("refreshToken", refreshToken, {httpOnly: true})
				.json({success: true, message: "Login success", data: { token: accessToken, username:existingUser?.username, email:existingUser?.email, role:existingUser?.role }});
		}
    } catch (error) {
        next(error.message);
    }
};

//signup a google user after selecting a role from him
const signupGoogleUserWithRoleController = async(req, res, next) => {
	try {
		console.log(req.body)
		const tokenDecoded = await jwt.verify(req.body.token, process.env.TEMP_TOKEN_SECRET);
		await User.updateOne({email:tokenDecoded.email}, {$set: {role:req.body.role}});
		
		let user = await User.findOne({email: tokenDecoded.email});
		let  {username, email, role, _id } = user;
		//generate jwt
		const payload = { email, role, userID: _id };
		const accessToken = generateToken(process.env.ACCESS_TOKEN_SECRET, payload, process.env.AX_TOKEN_EXP_TIME);
		const refreshToken = generateToken(process.env.REFRESH_TOKEN_SECRET, payload, process.env.RF_TOKEN_EXP_TIME);
		//returning a reponse
		return res
			.status(201)
			.cookie("refreshToken", refreshToken, {httpOnly: true,})
			.json({success: true, message: "Login success", data: { token: accessToken, username, email, role } });
	} catch (error) {
		next(error.message);
	}
}

//verify otp send
const verifyOtpController = async (req, res, next) => {
    try {
        const {email, otp} = req.body;
        const otpFromRedis =await redis.get(email);
        console.log("call recieved at otp route : " + otpFromRedis, otp, email)
        if(otp !== otpFromRedis){
            return next({status: 401, message:"otp invalid"});
        }
        let userDetails = await redis.get("det_"+email);
        userDetails = JSON.parse(userDetails);
		await User.updateOne({email: email}, {$set:{isEmailVerified: true}})
        //signup user by providing username, email and token
        const payload = { username: userDetails?.username, email:userDetails?.email, role:userDetails?.role, userID:userDetails?.userID };
			const accessToken = generateToken(
				process.env.ACCESS_TOKEN_SECRET,
				payload,
				"10s"
			);
			const refreshToken = generateToken(
				process.env.REFRESH_TOKEN_SECRET,
				payload,
				"10s"
			);
            //deleting data stored in redis 
			//returning a reponse
			return res
				.cookie("refreshToken", refreshToken, {httpOnly: true})
				.status(201)
				.json({success: true,message: "signup success",
					data: {
						token: accessToken,
						username:userDetails?.username,
						email:userDetails?.email,
						profilePicture: null,
						role:userDetails?.role,
					},
				});
    } catch (error) {
        console.log(error);
        next(error.message)   
    }
}

//resend otp on user request
const resendOtpController = async (req, res, next) => {
    try {
		console.log("call recieved: ", req.body)
        //generate otp
        const otp = generateOTP(6);
        console.log("otp re-generated :", otp);
        //send otp to user via nodemailer here

        //store otp in REDIS DB
        redis.set(req.body.email, otp);
        redis.expire(email, 60);
        return res.status(200).json({success:true, message:"OTP sent to registered email"})
    } catch (error) {
        //next(error.message);
    }
}

//verify email for forgot password
const verifyEmailController = async (req, res, next) => {
	try {
		console.log(req.body)
		let userDetails = await User.findOne({email: req.body.email})
		if(!userDetails){
			return next({status: 404, message:"User not found"})
		}
		const otp = generateOTP(6);
        console.log("otp generated :", otp);
        //send otp to user via nodemailer here

        //store otp in REDIS DB
        redis.set(userDetails?.email, otp);
        redis.expire(userDetails?.email, 60);
        return res.status(200).json({success:true, message:"OTP sent to registered email"})
	} catch (error) {
		next(error.message);
	}
}

//verify the otp send from forgot password page
const verifyOtpSendFromForgotPasswordController = async(req, res, next) => {
	try {
		const {email, otp} = req.body;
        const otpFromRedis =await redis.get(email);
        console.log("call recieved at otp route : " + otpFromRedis, otp, email)
        if(otp !== otpFromRedis){
            return next({status: 401, message:"otp invalid"});
        }
		//send a temporary token encapulating user email
		const payload = { email };
		const temporaryToken = generateToken(process.env.TEMP_TOKEN_SECRET, payload, process.env.TEMP_TOKEN_EXP_TIME);
		return res
			.status(201)
			.json({success: false, message: "select your role next", data: { tempToken: temporaryToken} });		
	} catch (error) {
		next(error.message)	
	}
}

const resetPasswordController = async(req, res, next) => {
	try {
		const {tempToken, password} = req.body;
		//validate temp token on backend
		const tempTokenResp = jwt.verify(tempToken, process.env.TEMP_TOKEN_SECRET);
		//reset password on token valid
		const hashedPassword = await bcrypt.hash(password, 10);
		const passwordUpdateResponse = await User.updateOne({email:tempTokenResp.email}, {$set: {password:hashedPassword}})
		if(passwordUpdateResponse?.modifiedCount == 1) {
			return res.status(201).json({success: true, message:"password updated successfully, Login to continue"})
		}

	} catch (error) {
		next(error.message);
	}
}


//export all
module.exports = {
	signupUserController,
	loginUserController,
	signupGoogleUserController,
    verifyOtpController,
    resendOtpController,
	signupGoogleUserWithRoleController,
	verifyEmailController,
	verifyOtpSendFromForgotPasswordController,
	resetPasswordController,
};


