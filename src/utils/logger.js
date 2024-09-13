const fs = require('fs');
const path = require('path');

// Function to log task completion to a file
function logTaskCompletion(userId, timestamp) {
  const logEntry = `${timestamp}: Task completed for user ${userId}\n`;

  // Log the task completion into the 'task-log.txt' file
  fs.appendFile(path.join(__dirname, '../../task-log.txt'), logEntry, (err) => {
    if (err) {
      console.error('Error writing to task-log.txt:', err);
      throw err;
    }
    console.log(`Logged task for user ${userId}`);
  });
}

module.exports = { logTaskCompletion };
