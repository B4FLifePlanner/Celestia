const express = require('express')
const Team = require('../models/Team'); // Add this line

const User = require('../models/User')
// const checkManagerRole = require('../middlewares/checkManagerRole')
const router = express.Router()






router.post('/add-member/:currentUser', async (req, res) => {
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
        const CurrentUser = req.params.currentUser;
    

    try {

         
        
        const team = await Team.findOne({
            
                leaderId: CurrentUser 
            
        })
        .populate('leaderId')        
        if (!team) {
            return res.status(404).json({ message: 'Team not found for this user' });
        }


        const newMember = new User({
            Role: 'member',
            TeamId: team._id,
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
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})



module.exports = router