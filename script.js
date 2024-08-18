

// Load the Socket.IO client library
const script = document.createElement('script');
script.src = 'https://cdn.socket.io/4.0.0/socket.io.min.js';
script.onload = () => {
    // Connect to the Socket.IO server
    const socket = io("http://localhost:3000");

    // Handle Socket.IO connection open
    socket.on('connect', () => {
        console.log('Socket.IO connected');
    });

    // Handle incoming messages
    socket.on('notification', (message) => {
        document.getElementById('notification').innerText = message;
    });

    // Handle Socket.IO errors
    socket.on('error', (error) => {
        console.error('Socket.IO error:', error);
    });

    // Handle Socket.IO connection close
    socket.on('disconnect', () => {
        console.log('Socket.IO connection closed');
    });
};

// Append the script to the head
document.head.appendChild(script);
