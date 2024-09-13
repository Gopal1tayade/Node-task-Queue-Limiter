const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiterMemory = new RateLimiterMemory({
  points: 20,  // Maximum of 20 tasks
  duration: 60,  // Per minute
});

module.exports = { rateLimiterMemory };
