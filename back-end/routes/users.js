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
        Deadline
    } = req.body
    const { CurrentUser } = req.query
    try {
        const user = await User.findById(CurrentUser)
        console.log(user)
        if (!user) {
            return res.status(403).json({ error: "Unauthorized access" });
        }
        const task = user.To_Do.find((task) => {
            const taskDeadline = new Date(task.Deadline);
            const inputDeadline = new Date(Deadline);
        
            return (
                task.Name === Name &&
                task.Description === Description &&
                taskDeadline.toISOString() === inputDeadline.toISOString()
            );
        });
        
        if (task) {
            return res.status(400).json({ message: "Task does already exist" });
        }

        const newToDo = {
            Name,
            Description,
            Deadline
        };

        user.To_Do.push(newToDo)
        await user.save();
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

router.delete('/delete-task', async (req, res) => {
    const { CurrentUser, CurrentTask } = req.query;

    try {
        // Parse the serialized CurrentTask object
        const parsedTask = JSON.parse(CurrentTask);

        const user = await User.findById(CurrentUser);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const task = user.To_Do.find(
            (task) =>
                task.Name === parsedTask.Name &&
                task.Description === parsedTask.Description
        );

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Remove the task from the To_Do array
        user.To_Do = user.To_Do.filter(
            (t) => t.Name !== parsedTask.Name || t.Description !== parsedTask.Description
        );

        // Save the user document to persist the changes
        await user.save();

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});



module.exports = router