const redis = require('redis');

// Replace with your actual values
const REDIS_URL = 'redis://default:redis@redis-19773.c257.us-east-1-3.ec2.redns.redis-cloud.com:19773';

// Create a Redis client
const client = redis.createClient({ url: REDIS_URL });

// Connect to Redis
client.connect().then(() => {
    console.log('Connected to Redis Cloud');
}).catch((err) => {
    console.error('Redis connection error:', err);
});

// Handle connection errors
client.on('error', (err) => {
    console.error('Redis connection error:', err);
});

// Function to publish a notification
const publishNotification = async (message) => {   
    try {     
        await client.publish('notifications', message); //send msg to Redis Database    
        console.log(`Notification sent: ${message}`);
    } catch (error) {     
        console.error('Error publishing notification', error);   
    } 
};

// Example usage
setInterval(() => {
  publishNotification('A user just posted!');
}, 5000);

