const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  mentorID: {
    type: String,
    required: true
  },

  menteeID: {
    type: String,
    required: true
  },

  meetingDate: {
    type: Date,
    required: true
  },

  meetingTime: {
    type: String,
    required: true
  },

  slotPrice: {
    type: Number,
    required: true
  },

  meetingStatus: {
    type: String,
    enum: ['completed', 'not completed', 'cancelled'],
    default: 'not completed'
  },
  marks:{
    type: Number,
    default: 0
  },
  feedback: {
    type: String,
    default: null
  },
});

module.exports = mongoose.model('Interview', interviewSchema);