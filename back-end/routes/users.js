const express = require('express')
const User = require('../models/User');
const mongoose = require('mongoose');
const router = express.Router()




router.post('/add-To-Do', async (req, res) => {
    const {
        Name,
        Description,
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

router.patch('/update-task-status', async (req, res) => {
    const { CurrentUser } = req.query;
    const { taskId, newStatus } = req.body;

    try {
        // Fetch the user by their ID
        const user = await User.findById(CurrentUser);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the specific task by taskId
        const task = user.To_Do.id(taskId); // Using Mongoose's subdocument query helper
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Update the task's status
        task.Status = newStatus;

        // Save the updated user document
        await user.save();

        res.status(200).json({ message: "Task status updated successfully", task });
    } catch (error) {
        console.error("Error updating task status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})



module.exports = router