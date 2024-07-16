const { Server } = require('socket.io');
const Chat = require('../models/chatModel');

const socket = (expressServer) => {
    const io = new Server(expressServer, {
        cors: {
        origin: process.env.NODE_ENV === "production" ? false : '*'
        //["http://localhost:3000", "http://127.0.0.1:3000", "http://127.0.0.1:5500/"]
        }
    });

    io.on('connection', (socket) => {
        console.log('New connection' + socket.id);

        socket.on('joinRoom', (roomId) => {
            socket.join(roomId);
            console.log(`Joined room ${roomId}`);
        });

        socket.on('leaveRoom', (roomId) => {
            socket.leave(roomId);
            console.log(`Left room ${roomId}`);
        });

        socket.on('sendMessage', async(data) => {
            const { roomId, message, senderID } = data;
            console.log("senderID" + senderID);
            let msgObj = { message, senderID };
            //save message to database
            await Chat.updateOne({chatID:roomId}, {$push: {messages: msgObj }})
            .then(resp => { 
                console.log(resp)
                let messageObj = { message, senderID, isRead:false, isDelivered:false, isDeleted:false }
                io.to(roomId).emit('message', messageObj);
                console.log(`Sent ${message} to room ${roomId}`);
                .0
            }).catch(err => console.log(err));
        });

        socket.on('markMessagesAsRead', (chatID) => {
            //change message status in database
            io.in(chatID).emit('messagesMarkedAsRead');
        });
    });
}

module.exports = socket;