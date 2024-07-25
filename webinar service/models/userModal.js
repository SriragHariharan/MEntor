const mongoose = require('mongoose');

const userModalSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    role: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    userID: { 
        type: String, 
        required: true, 
        unique: true 
    },
    profilePic: { 
        type: String,
        default: null 
    },
    webinars: []
}, 
{ timestamps: true });

const UserModal = mongoose.model('UserModal', userModalSchema);

module.exports = UserModal;