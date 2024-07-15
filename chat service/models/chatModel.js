const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  // Unique chat ID
  chatID: {
    type: String,
    required: true,
    unique: true
  },
  // Messages
  messages: [
    {
      // Message content
      message: { type: String, required: true },
      // Sender and receiver IDs
      senderId: { type: String, required: true },
      receiverId: { type: String, required: true },
      // Message status
      isRead: { type: Boolean, default: false },
      isDelivered: { type: Boolean, default: false },
      isDeleted: { type: Boolean, default: false },
      // Timestamps
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
    }
  ]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;