const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const taskRoutes = require('./routes/taskRoutes');
app.use('/task', taskRoutes);
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const PORT = 6500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
