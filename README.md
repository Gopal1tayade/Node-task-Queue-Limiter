#                                       *  ##### Task Queue and Rate Limiting ##### *
## Description
This project implements a Node.js application for task queuing with rate limiting. It uses Bull for task queuing, Redis for storing queue data, Express for routing, and rate-limiter-flexible for rate limiting. The application is designed to handle user tasks with rate limiting to ensure efficient processing.

## Project Structure
  * src/app.js: Main Express application.
  * src/cluster.js: Initializes a cluster of Node.js processes for handling multiple CPU cores.
  * src/queue/taskQueue.js: Defines and processes the task queue using Bull.
  * src/routes/taskRoutes.js: Handles API routes for task submissions.
  * src/utils/logger.js: Logs task completions to a file.
  * src/utils/rateLimiter.js: Manages rate limiting for task submissions.
  * task-log.txt: Log file for task completion records.
## Prerequisites
* Node.js (version 14.x or later)
* Redis server (version 6.x or later)

# Installation
## Clone the repository:    
 * git clone https://github.com/Gopal1tayade/Node-task-Queue-Limiter.git
 * cd task-queue-rate-limiting
## Install dependencies:
  * npm install
## Start Redis server:
   Ensure you have Redis installed and running on localhost:6379. You can start it with:
  * redis-server

## Running the Application
 * Start the application:
   To start the application with clustering, run: npm start //
   This command will start the application on multiple CPU cores as defined in src/cluster.js.
* Verify the server is running:
  Open your browser and navigate to:  http://localhost:6500
   You should see the message "Server is running".


## API Endpoints
### POST /task
Submits a task to the queue.
 * Request body:
{
"userId": "string", 
"taskData": "string"
}
* Responses:
  * 200 OK - Task added to queue
  * 429 Too Many Requests - Rate limit exceeded
## Testing
* Submit a task:
         You can use tools like Postman  For example:
* Check task logs:
           The task completion logs are written to task-log.txt. Check this file to see
            the log entries for completed tasks.
## Troubleshooting
ECONNREFUSED error:
If you encounter an ECONNREFUSED error, ensure that Redisserver is running and accessible at localhost:6379.

