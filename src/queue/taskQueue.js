const Queue = require('bull');
const { logTaskCompletion } = require('../utils/logger');


const taskQueue = new Queue('taskQueue', {
  redis: {
    host: 'localhost',
    port: 6379,
  },
  limiter: {
    max: 20,         
    duration: 60000,   
  },
});


taskQueue.process(async (job) => {
  try {
    console.log(`Processing task for user ${job.data.userId}`);
    
   
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    
    logTaskCompletion(job.data.userId, new Date().toISOString());

    console.log(`Task completed for user ${job.data.userId}`);
  } catch (error) {
    console.error(`Error processing task for user ${job.data.userId}:`, error);
    throw error; 
  }
});


taskQueue.on('error', (err) => {
  console.error('Queue error:', err);
});

module.exports = { taskQueue };
