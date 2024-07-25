//create a new profile with data from kafka broker
const createProfile = async(messageData) => {
    try {
        console.log("CP :::",messageData)
        let {userID, username, email, role} = messageData;
        const newProfileObject = new Profile({userID, username, email, role});
        await newProfileObject.save();
        console.log("New user profile created..!");
    } catch (error) {
        console.log(error.message);
    }
}