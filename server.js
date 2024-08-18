const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { createClient } = require('redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://127.0.0.1:5500", //front-end server, normally would block it
        methods: ["GET", "POST"]
    }
});

//Reading from Redis
const redisClient = createClient({
    url: 'redis://localhost:6379' // Replace with Redis server 
});

redisClient.connect();
redisClient.subscribe('notifications', (message) => {
    console.log('Received message from Redis:', message);
    io.emit('notification', message); //send alert for front-end to recieve
});


//testing
io.on('connection', (socket) => {
    console.log('New client connected');
  
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
