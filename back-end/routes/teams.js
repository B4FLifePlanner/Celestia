const express = require('express')
const User = require('../models/User')
const Team = require('../models/Team')
const router = express.Router()


router.get('/teams', async (req, res) => {
    try {
        const {CurrentUser} = req.query; 
        console.log(CurrentUser);
        
        const team = await Team.findOne({
            $or: [
                { leaderId: CurrentUser },
                { Members: CurrentUser }
            ]
        })
        .populate('leaderId')
        .populate('Members')
        
        if (!team) {
            return res.status(404).json({ message: 'Team not found for this user' });
        }

        const NeededDataUsers = [team.leaderId, ...team.Members];
        console.log(NeededDataUsers);
        res.status(200).json(NeededDataUsers);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error retrieving team data' });
    }
    
    
});


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