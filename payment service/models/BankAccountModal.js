const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
        trim: true
    },
    ifscCode: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    accountHolderName: {
        type: String,
        required: true,
        trim: true
    },
    bankName: {
        type: String,
        trim: true
    },
    branchName: {
        type: String,
        trim: true
    },
    googlePayNumber: {
        type: String,
        trim: true
    }
}, {timestamps:true});

const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

module.exports = BankAccount;