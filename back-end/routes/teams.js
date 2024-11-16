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
        confirmPassword,
        Phone,
        TeamId
        } = req.body;
        
    

    try {

        const team = await Team.findById(TeamId);
        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }


        const newMember = new User({
            Role: 'member',
            TeamId,
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

        team.Members.push(newMember._id);
        await team.save();
        
        res.status(201).json(
            {user: newMember}
        );

        await Team.findById(TeamId)
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})



module.exports = router