const mongoose = require('mongoose');

const interviewModalSchema = new mongoose.Schema({
    topic: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    type: { 
        type: String, 
        enum: ['live', 'recorded'], 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    amount: { 
        type: Number, 
        required: true 
    },
    banner: { 
        type: String, 
        required: true 
    },
    mentorID: { 
        type: String, 
        required: true 
    },
    participants: []
}, { timestamps: true });

const InterviewModal = mongoose.model('InterviewModal', interviewModalSchema);

module.exports = InterviewModal;