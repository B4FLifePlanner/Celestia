const express = require('express')
const User = require('../models/User')
const router = express.Router()

const authenticateUser = require('./middlewares/authenticateUser');





router.post('/register', async (req, res) => {
    const { 
        FirstName,
        LastName,
        DOB,
        Gender,
        Email,
        Password,
        Phone,
        To_Do} = req.body;

    try {
        const newUser = new User({ 
            FirstName,
            LastName,
            DOB,
            Gender,
            Email,
            Password,
            Phone,
            To_Do})
        await newUser.save();
        res.status(201).json(
            {user: newUser}
        );
    }
    catch (error) {
        res.status(400).json({ error: error.message });
     }
})

router.post('/Add_task/', async (req, res) => {
    const {Name, Description} = req.body 
    try {
        const user = await User.findById(req.user._id); 
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        user.tasks.push({ Name, Description });
        await user.save();

        res.status(200).send({ message: 'Task added', task: { Name, Description } });
    } catch (error) {
        res.status(500).send({ message: 'Error adding task' });
    }
})

module.exports = router