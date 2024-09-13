const express = require('express');
const router = express.Router();
const { rateLimiterMemory } = require('../utils/rateLimiter.js');
const { taskQueue } = require('../queue/taskQueue');

// Route to handle task submissions
router.post('/', async (req, res) => {
  try {
    console.log("on route task/");
    await rateLimiterMemory.consume(req.body.userId); // Consume rate limit
    console.log("complete ratelinitermemory");

    // Add the task to the queue
     taskQueue.add({
      userId: req.body.userId,
      taskData: req.body.taskData
    });

    res.status(200).send('Task added to queue');
  } catch (error) {
    res.status(429).send('Rate limit exceeded');
  }
});

module.exports = router;
