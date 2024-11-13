const express = require('express')
const User = require('../models/User')
const router = express.Router()






router.post('/register', async (req, res) => {
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
        const newUser = new User({ 
            FirstName,
            LastName,
            DOB,
            Gender,
            Email,
            Password,
            Phone
            })
        await newUser.save();
        res.status(201).json(
            {user: newUser}
        );
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})



module.exports = router