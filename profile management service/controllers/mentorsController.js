const router = require("express").Router();
const Profile = require("../models/profileModel");

//get all mentors
const allMentorsController = async(req, res, next) =>{
    try {
        let allMentors = await Profile.find({role:"mentor"});
        return res.status(200).json({success:true, message:null, data:{mentors:allMentors}});
    } catch (error) {
        next(error.message)
    }
}


//get profile details of a mentor/mentee
const getUserDetailsController = async(req, res, next) =>{
    try {
        let profileDetails = await Profile.findOne({userID:req.params.userID});
        return res.status(200).json({success:true, message:null, data:{profileDetails:profileDetails}});
    } catch (error) {
        next(error.message);   
    }
}


module.exports = {
    allMentorsController,
    getUserDetailsController,
};