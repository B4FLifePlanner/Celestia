const express = require('express')
const User = require('../models/User');
const mongoose = require('mongoose');
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
            { user: newUser }
        );
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/add-To-Do', async (req, res) => {
    const {
        Name,
        Description,
        Status,
        Deadline
    } = req.body
    const { CurrentUser } = req.query
    try {
        const user = await User.findById(CurrentUser)
        console.log(user)
        if (!user) {
            return res.status(403).json({ error: "Unauthorized access" });
        }

        const newToDo = {
            Name,
            Description,
            Status,
            Deadline
        };

        user.To_Do.push(newToDo)
        await user.save();
        console.log(user)
    }
    catch (error) {
        console.error('Error adding task', error);
        res.status(400).json({ error: error.message });
    }

})

router.get('/get-tasks', async (req, res) => {
    const { CurrentUser } = req.query
    console.log(CurrentUser)
    try {
        const user = await User.findById(CurrentUser)
        if (!user) {
            return res.status(403).json({ error: "Unauthorized access" });
        }

        const To_Do = user.To_Do
        res.status(200).json(To_Do)
    }
    catch (error) {
        console.error('Error getting tasks', error);
        res.status(400).json({ error: error.message });
    }
})



module.exports = router