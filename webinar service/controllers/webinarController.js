const uploadFileToS3 = require("../helpers/aws");
const Webinar = require("../models/webinarModal")
const User = require("../models/userModal")

//create a new profile with data from kafka broker
const createProfile = async(messageData) => {
    try {
        console.log("CP :::",messageData)
        let {userID, username, email, role} = messageData;
        const newProfileObject = new User({userID, username, email, role});
        await newProfileObject.save();
        console.log("New user profile created..!");
    } catch (error) {
        console.log(error.message);
    }
}

//generate a meeting link
function generateMeetingLink() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const linkLength = 8; // adjust the length of the link as needed
  let meetingLink = '';
  const timestamp = Date.now();

  for (let i = 0; i < linkLength; i++) {
    meetingLink += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return `webinar-${timestamp}-${meetingLink}`;
}

//add webinar controller
const addNewWebinarController = async(req, res, next) => {
    try {
        if(req.user?.role !== "mentor"){
            return next("Unauthorized request");
        }
        //let imageURL = await uploadFileToS3(req);
        delete req.body.banner;
        let link = generateMeetingLink();
        data = {...req.body, amount: Number(req.body.amount), banner: "<url here>", mentorID: req.user?.userID, link}
        let newWebinarObject = new Webinar(data);
        await newWebinarObject.save();
    } catch (error) {
        next(error.message)
    }
};

const getAllWebinarsController = async(req, res, next) => {
    try {
        const today = new Date();
        const todaysDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const option = req.params.option;
        let webinars = [];
        switch(option) {
            case "all": 
                webinars = await Webinar.find({date: {$gte: todaysDate}});
                break;
            case "today": 
                const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

                webinars = await Webinar.find({ date: { $gte: startOfDay, $lt: endOfDay } });
                break;
            case "free":
                webinars = await Webinar.find({$and:[{amount: 0}, {date: {$gt: todaysDate}}]});
                break;
            case "paid":
                webinars = await Webinar.find({$and:[{amount: {$gt:0}}, {date: {$gt: todaysDate}}]});
                break;
            default:
                webinars = await Webinar.find({date: {$gt: todaysDate}});
            }
            console.log(webinars)
            return res.status(200).json({success: true, message: null, data:{ webinars}})
    } catch (error) {
        next(error.message)
    }
};


module.exports = {
    createProfile,
    addNewWebinarController,
    getAllWebinarsController,
}