const express = require('express')
const Task = require('../models/Task')
const checkUserRole = require('../middlewares/checkWorkTasks')


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

router.get('/:userId', checkUserRole, async (req, res) => {
    try {
        const tasks = await Task.find(req.taskQuery);

        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found' });
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router