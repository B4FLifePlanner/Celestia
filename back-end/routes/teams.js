const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const checkManagerRole = require('../middlewares/checkManagerRole')
const router = express.Router()






router.post('/add-member', checkManagerRole, async (req, res) => {
    const { 
        FirstName,
        LastName,
        DOB,
        Gender,
        Email,
        Password,
        confirmPassword,
        Phone,
        } = req.body;

    

    try {
        const teamId = req.teamId
        const newMember = new User({
            Role: 'member',
            TeamId: teamId,
            FirstName,
            LastName,
            DOB,
            Gender,
            Email,
            Phone,
            Password,
            confirmPassword,
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