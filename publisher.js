const redis = require('redis');
const client = redis.createClient({
  url: 'redis://localhost:6379' // Replace with your Redis server URL if needed
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

client.connect();

const publishNotification = async (message) => {
  try {
    await client.publish('notifications', message);
    console.log(`Notification sent: ${message}`);
  } catch (error) {
    console.error('Error publishing notification', error);
  }
};

// test: Publish a notification every 5 seconds
setInterval(() => {
  publishNotification('This is a notification!');
}, 5000);
