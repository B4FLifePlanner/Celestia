const express = require('express')
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
        Phone
        } = req.body;
    

    try {
        const newMember = new User({
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