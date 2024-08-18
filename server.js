const redis = require('redis');

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { createClient } = require('redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", //CHANGE: for front-end server, normally would block it
        methods: ["GET", "POST"]
    }
});


const REDIS_URL = 'redis://default:redis@redis-19773.c257.us-east-1-3.ec2.redns.redis-cloud.com:19773'; //REAL redis hosted url

// Create a Redis client
const client = redis.createClient({ url: REDIS_URL });

// Connect to Redis
client.connect().then(() => {
    console.log('Connected to Redis Cloud');
    client.subscribe('notifications', (message) => {
      console.log('Received message from Redis:', message);
      io.emit('notification', message); //send alert for front-end to recieve
    });
}).catch((err) => {
    console.error('Redis connection error:', err);
});




//testing
io.on('connection', (socket) => {
    console.log('New client connected');
  
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(3001, () => {
    console.log('Server listening on port 3001');
});
