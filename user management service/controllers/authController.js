const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
		if (existingUser) next({ status: 409, message: "User already exists" });
		req.body.password = await bcrypt.hash(req.body.password, 10);
		const newUserObj = new User({
			...req.body,
			password: req.body.password,
		});
		const savedUser = await newUserObj.save();
		const { username, email, role, _id } = savedUser;
		//sign a jwt token
		const payload = { username, email, role, userID: _id };
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
			.cookie("refreshToken", refreshToken, {
				expires: new Date(Date.now() + 10 * 1000),
				httpOnly: true,
			})
			.status(201)
			.json({
				success: true,
				message: "account created",
				data: {
					token: accessToken,
					username,
					email,
					profilePicture: null,
				},
			});
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
			next({ status: 401, message: "Invalid login credentials" });
		else {
			const { username, email, role, _id } = existingUser;
			//sign a jwt token
			const payload = { username, email, role, userID: _id };
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
				.cookie("refreshToken", refreshToken, {
					expires: new Date(Date.now() + 10 * 1000),
					httpOnly: true,
				})
				.status(201)
				.json({
					success: true,
					message: "Login success",
					data: {
						token: accessToken,
						username,
						email,
						profilePicture: existingUser.profilePicture,
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
			const { username, email, role, _id } = savedUser;
			//generate jwt
			const payload = { username, email, role, userID: _id };
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
				.cookie("refreshToken", refreshToken, {
					expires: new Date(Date.now() + 10 * 1000),
					httpOnly: true,
				})
				.status(201)
				.json({
					success: true,
					message: "Login success",
					data: { token: accessToken, username, email },
				});
		} 
        else if (existingUser && existingUser.loginType === "local") {
			return next({ status: 401, message: "Try other auth options" });
		}
        else if (existingUser && existingUser.loginType === "google") {
			const payload = {
				username: existingUser?.username,
				email: existingUser?.email,
				role: existingUser?.role,
				userID: existingUser?._id,
			};
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
				.cookie("refreshToken", refreshToken, {
					expires: new Date(Date.now() + 10 * 1000),
					httpOnly: true,
				})
				.status(201)
				.json({
					success: true,
					message: "Login success",
					data: { token: accessToken, username:existingUser?.username, email:existingUser?.email },
				});
		}
                } catch (error) {
                    next(error.message);
                }
        };



//export all
module.exports = {
	signupUserController,
	loginUserController,
	signupGoogleUserController,
};