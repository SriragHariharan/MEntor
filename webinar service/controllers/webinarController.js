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
        let imageURL = await uploadFileToS3(req);
        delete req.body.banner;
        let link = generateMeetingLink();
        data = {...req.body, amount: Number(req.body.amount), banner: imageURL, mentorID: req.user?.userID, link}
        let newWebinarObject = new Webinar(data);
        let insertedResp = await newWebinarObject.save();
        console.log("req body ::: ",insertedResp);
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {
    createProfile,
    addNewWebinarController,
}