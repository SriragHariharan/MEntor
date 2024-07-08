const Mentor = require("../models/mentorModel")
const Mentee = require("../models/menteeModel");
const Slot = require("../models/slotModel");

//create  new user from kafka message
const createProfile = async(messageData) => {
    try {
        console.log("CP :::",messageData)
        let {userID, username, email, role} = messageData;
        if(role === 'mentor') {
            //insert to mentor collection
            const mentorObj = new Mentor({userID});
            await mentorObj.save();
            console.log("mentor added successfully");
        }
        else if(role === 'mentee') {
            //insert to mentee collection
            const menteeObj = new Mentee({userID});
            await menteeObj.save();
            console.log("mentee added successfully");
        }
    } catch (error) {
        console.log(error.message);
    }
}

//add new slot
const addNewSlotController = async(req, res, next) => {
    try {
        const {userID, role} = req.user;
        if(role !== 'mentor'){
            return next({status:401, message:"User Unauthorized"})
        }
        else{
            //create new slot object
            const {date, time, amount} = req.body
            //adding slot to the mentor collection
            let resp = await Mentor.updateOne({userID}, {$push:{slots:{date, time, amount}}})
            console.log("insertion response: " + resp.upsertedId)
            if(resp?.modifiedCount !== 1){
                return next({status:401, message:"Unable to add slot"})
            }
            return res.status(201).json({success:true, message:"Slot added", data:{slot:{date, time, amount}}})
        }
    } catch (error) {
        return next(error?.message)
    }
};

//get slots by specific date
const getSlotsByDateController = async(req, res, next) => {
    try {
        let {mentorID, date} = req.body;
        let slotsByDate = await Mentor.aggregate([
                                    {$match:{userID:mentorID, _id:0}},
                                    {$project:{slots:{
                                        $filter: {
                                            date: { $eq: ["$date", date] } 
                                        }
                                    }}}
                                ])
        return res.status(200).json({success:true, message:null, data:{slots:slotsByDate}});
    } catch (error) {
        next(error?.message)
    }
}

//get my slots by specific date
const getMySlotsByDateController = async(req, res, next) => {
    try {
        let {date} = req.body;
        let slots = await Mentor.findOne({userID:req.user?.userID,},{slots:1, _id:0});
        console.log(slots.slots)
        console.log(date)

        let filteredSlots = slots?.slots?.filter(slot => slot?.date?.toISOString().split('T')[0].includes(date.split('T')[0]))
        return res.status(200).json({success:true, message:null, data:{slots:filteredSlots}});
    } catch (error) {
        console.log(error);
        next(error?.message)
    }
}

//delete a specific slot
const deleteAspecificSlotController = async(req, res, next) => {
    console.log(req.params)
    try {
        if(req.user.role !== "mentor"){
            return next({error:401, message:"You do not have permission to delete this slot"})
        }
        let slotDeletionResponse = await Mentor.updateOne({userID:req.user.userID}, {$pull:{slots:{_id:req.params.slotID  }}});
        if(slotDeletionResponse.modifiedCount === 0){
            return next({error:500, message:"Unable to delete"})
        }
        return res.status(200).json({success:true, message:"Deleted slot", data:{}})
    } catch (error) {
        console.log(error)
        return next(error.message)
    }
}

module.exports = {
    createProfile,
    addNewSlotController,
    getSlotsByDateController,
    getMySlotsByDateController,
    deleteAspecificSlotController,
}