const redis = require('redis');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const client = redis.createClient({
  url: 'redis://localhost:6379' // Replace with Redis server URL 
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

client.connect();

io.on('connection', (socket) => {
  console.log('A user connected');

  // Subscribe to the 'notifications' channel
  client.subscribe('notifications', (message) => {
    console.log(`Message received: ${message}`);
    socket.emit('notification', message); // Send the notification to the client
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(express.static('public'));

http.listen(3000, () => {
  console.log('Server is running on port 3000');
});
