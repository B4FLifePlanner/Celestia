const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
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
        TeamId
        } = req.body;
    
        const teamObjectId = new mongoose.Types.ObjectId(TeamId); 

    try {
        const newMember = new User({
            FirstName,
            LastName,
            DOB,
            Gender,
            Email,
            Password,
            Phone,
            Role: 'member',
            TeamId: teamObjectId
        })
        await newMember.save();
        res.status(201).json(
            {user: newMember}
        );

        await Team.findByIdAndUpdate(
            teamObjectId, 
            { $push: { Members: newMember._id } },
            { new: true }
        );
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})



module.exports = router