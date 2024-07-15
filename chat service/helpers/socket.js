const { Server } = require('socket.io');

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

        socket.on('sendMessage', (data) => {
            //save message to database
            const { roomId, message } = data;
            io.to(roomId).emit('message', message);
            console.log(`Sent ${message} to room ${roomId}`);
        });
    });
}

module.exports = socket;