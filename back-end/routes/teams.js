const express = require('express')
const User = require('../models/User')
const Team = require('../models/Team')
const router = express.Router()


router.get('/api/teams', async (req, res) => {
    try {
        const {CurrentUser} = req.query; 
        
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
        Phone
        } = req.body;
    
    const { team_Id } = req.query.team_Id

    try {
        const newMember = new User({
            TeamId: team_Id, 
            FirstName,
            LastName,
            DOB,
            Gender,
            Email,
            Password,
            Phone,
            Role: 'member'
        })
        await newMember.save();
        res.status(201).json(
            {user: newMember}
        );
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})



module.exports = router