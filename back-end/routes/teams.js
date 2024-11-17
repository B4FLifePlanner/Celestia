const express = require('express')
const Team = require('../models/Team'); // Add this line

const User = require('../models/User')
// const checkManagerRole = require('../middlewares/checkManagerRole')
const router = express.Router()






router.post('/add-member', async (req, res) => {
    const { 
      FirstName,
      LastName,
      DOB,
      Gender,
      Email,
      Password,
      Phone,
    } = req.body;
  
    try {
  
      const {CurrentUser} = req.query;
      if (!CurrentUser) {
        return res.status(400).json({ error: 'Invalid request: Missing CurrentUser' });
      }
  
      // Find the team where the current user is either the leader or a member
      const team = await Team.findOne({
        $or: [
          { leaderId: CurrentUser },
          { Members: CurrentUser },
        ],
      });
  
      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }
  
  
      // Create a new member
      const newMember = new User({
        Role: 'member', // Assuming Role is a property in the User schema
        FirstName,
        LastName,
        TeamId: team._id,
        DOB,
        Gender,
        Email,
        Phone,
        Password,
      });
  
      // Save the new member to the database
      await newMember.save();
  
      // Add the new member to the team
      team.Members.push(newMember._id);
      await team.save();
  
      // Respond with the created member (excluding the password)
      res.status(201).json({ user: newMember });
    } catch (error) {
      console.error('Error adding member:', error);
      res.status(400).json({ error: error.message });
    }
  });



module.exports = router