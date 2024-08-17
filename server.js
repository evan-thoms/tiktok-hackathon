const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { createClient } = require('redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { port: 3001 });

const redisClient = createClient({
  url: 'redis://localhost:6379' // Replace with your Redis server URL
});

redisClient.connect();
redisClient.subscribe('notifications', (message) => {
    console.log('Received message from Redis:', message);
    io.emit('notification', message);
});

io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
