const express = require('express');
const { createServer } = require('http');
const cors = require('cors');
const connectDB = require('./db');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');
const teamRoutes = require('./routes/teams');
const registerPoint = require('./routes/registerPoint');
const loginPoint = require('./routes/loginPoint');
const { router: chatRoutes, initializeChatServer } = require('./routes/chat');

const PORT = process.env.PORT || 5000;

const app = express();
const server = createServer(app); // Create HTTP server

// Middleware
app.use(express.json());
app.use(cors());

// REST API Routes
app.use('/api/users', userRoutes);
app.use('/work/tasks', taskRoutes);
app.use('/api', teamRoutes);
app.use('/api/createUser', registerPoint);
app.use('/api/loginUser', loginPoint);

// Use chat REST routes
app.use('/api/chat', chatRoutes);

// Initialize WebSocket (Socket.IO)
initializeChatServer(server);

// Start Server
server.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
