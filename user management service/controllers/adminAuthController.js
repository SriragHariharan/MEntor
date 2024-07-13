const User = require("../models/userSchema");
const Mentor = require("../models/mentorSchema");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const loginAdminController = async(req, res, next) => {
    try {
        console.log("req.body: " + req.body.email, req.body.password);
        const { email, password } = req.body;
        if(email !== process.env.ADMIN_EMAIL){
            return next("Invalid login credentials");
        }
        const isPasswordValid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD);
        console.log("isPasswordValid ::: " + isPasswordValid)
        if (!isPasswordValid) return next("Invalid login credentials");
        
        //Generate a JWT token valid for 10 minutes
        const token = jwt.sign({ admin: true }, process.env.ADMIN_TOKEN_SECRET, {expiresIn: '5m'});
        res.cookie('admin-token', token, {httpOnly: true});
        return res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
        next(error.message);
    }
};

const getMentorMenteeCount = async (req, res, next) => {
    try {
        let mentorArray = await Mentor.find({});
        let menteeArray = await User.find({});
        console.log(mentorArray?.length, menteeArray?.length);
        return res.status(200).json({ success: true, data:{mentor: mentorArray.length, mentee: menteeArray.length} });
    } catch (error) {
        next(error.message);
    }
}


const getMentorsController = async (req, res, next) => {
    try {
        let mentors = await Mentor.find({accountVerified:true}, {password:0, role:0, profilePicture:0});
        return res.status(200).json({ success: true, message:null, data:{ mentors}});
    } catch (error) {
        next(error.message);
    }
}

const getMenteesController = async (req, res, next) => {
    try {
        let mentees = await User.find({}, {password:0, role:0, profilePicture:0});
        return res.status(200).json({ success: true, message:null, data:{ mentees }});
    } catch (error) {
        next(error.message);
    }
}

const getApprovalMentorsController = async (req, res, next) => {
    try {
        let mentors = await Mentor.find({accountVerified:false}, {password:0, role:0, profilePicture:0});
        return res.status(200).json({ success: true, message:null, data:{ mentors}});
    } catch (error) {
        next(error.message);
    }
}

module.exports = {
	loginAdminController,
    getMentorMenteeCount,
    getMentorsController,
    getMenteesController,
    getApprovalMentorsController,
};