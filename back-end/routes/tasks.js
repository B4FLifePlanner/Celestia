const express = require('express')
const Task = require('../models/Task')


const router = express.Router()

router.post('/Add-Task',  async (req, res) => {
    const { 
        Title,
        Info,
        AssignedTo,
        Deadline
        } = req.body 
     try {
        const newTask = new Task({
            Title,
            Info,
            AssignedTo,
            Deadline
        })
        await newTask.save()
        res.status(200).json({
            task: newTask
        })
     }   
     catch (error) {
        res.status(400).json({ error: error.message });
     }
})

module.exports = router