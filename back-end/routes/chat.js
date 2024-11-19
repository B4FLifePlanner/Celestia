const express = require('express');
const Message = require('../models/Message')
const User = require('../models/User')
const Team = require('../models/Team')
const { Server } = require('socket.io');
const { createServer } = require('http');

const router = express.Router();

// Function to initialize Socket.IO
function initializeChatServer(server) {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', async (socket) => {
    console.log('A user connected:', socket.id);
  
    // Assign the user to their team room on connection
    socket.on('joinTeam', async (userId) => {
      try {
        const user = await User.findById(userId); // Fetch user details
        if (!user || !user.TeamId) {
          console.error('User or team not found.');
          return;
        }
  
        // Join the team room
        const teamRoom = user.TeamId.toString();
        socket.join(teamRoom);
        console.log(`User ${userId} joined team room ${teamRoom}`);
      } catch (error) {
        console.error('Error joining team:', error);
      }
    });
  
    // Handle receiving a message
    socket.on('chat message', async (msg) => {
      try {
        console.log('Server received message:', msg);
  
        // Fetch the user's team
        const user = await User.findById(msg.Sender);
        if (!user || !user.TeamId) {
          console.error('User or team not found.');
          return;
        }
  
        const teamRoom = user.TeamId.toString();
  
        // Save the message to the database
        await Message.create({
          TeamId: user.TeamId,
          Sender: msg.Sender,
          SenderName: user.FirstName + ' ' + user.LastName,
          Content: msg.Content,
          Time: msg.Time,
        });
  
        // Broadcast the message only to the team room
        io.to(teamRoom).emit('chat message', msg);
      } catch (error) {
        console.error('Error handling chat message:', error);
      }
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
  
  return io; // Optionally return io if needed elsewhere
  
}

// Example REST route for chat
router.get('/messages', async (req, res) => {
  const { CurrentUser } = req.query; // Get the CurrentUser from query parameters

  if (!CurrentUser) {
    return res.status(400).json({ message: 'CurrentUser parameter is required' });
  }

  try {
    // Find the user by ID
    const user = await User.findOne({ _id: CurrentUser });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the messages associated with the user's team
    const messages = await Message.find({ TeamId: user.TeamId });

    // Return the messages
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = { router, initializeChatServer };
