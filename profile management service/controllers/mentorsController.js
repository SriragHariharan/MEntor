const router = require("express").Router();
const { publishNewChat } = require("../kafka/producer");
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

//follow a mentor
const followMentorController = async (req, res, next) => {
    try {
        //update my follwing array
        let myUpdatedResp = await Profile.updateOne({userID: req.user.userID},{$push:{following: req.body.mentorID}})
        if(myUpdatedResp.modifiedCount !== 1){
            return next("Unable to follow")
        }
        //update mentors followers array
        let mentorUpdatedResp = await Profile.updateOne({userID: req.body.mentorID},{$push:{followers: req.user.userID}});
        if(mentorUpdatedResp.modifiedCount !== 1){
            return next("Unable to follow")
        }
        //create a new chat in chat management service
        publishNewChat(req.user.userID, req.body.mentorID)

        //send notification to notification service
        return res.status(201).json({success: true, message:null, data:{}})
    } catch (error) {
        
    }
}


module.exports = {
    allMentorsController,
    getUserDetailsController,
    followMentorController,
};