const express = require('express')
const Task = require('../models/Task')
const Team = require('../models/Team')
const User = require('../models/User')

const router = express.Router()



router.post('/Add-Task', async (req, res) => {
    const { Title, Info, AssignedTo, Deadline } = req.body;
    const { CurrentUser } = req.query;

    if (!CurrentUser) {
        return res.status(400).json({ error: "CurrentUser is required" });
    }

    try {
        // Fetch the current user
        const user = await User.findById(CurrentUser);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Fetch the names of the assigned users
        const assignedUsers = await User.find({ _id: { $in: AssignedTo } }, 'FirstName LastName');
        const AssignedToNames = assignedUsers.map(user => `${user.FirstName} ${user.LastName}`);

        
        const newTask = new Task({
            Title,
            TeamId: user.TeamId,
            Info,
            AssignedTo,
            AssignedToNames,
            Deadline
        });

        
        await newTask.save();

        res.status(200).json({ task: newTask });
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const { CurrentUser } = req.query;

        if (!CurrentUser) {
            return res.status(400).json({ error: "CurrentUser is required" });
        }

        let tasks;
        const user = await User.findById(CurrentUser);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (user.Role === 'manager') {
            tasks = await Task.find({ TeamId: user.TeamId }); 
        } else if (user.Role === 'member') {
            tasks = await Task.find({ AssignedTo: CurrentUser });
        } else {
            return res.status(403).json({ error: "Unauthorized access" });
        }

        res.status(200).json(tasks); 

    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


router.get("/get-members", async (req, res) => {
    const { CurrentUser } = req.query;
    try {
        const team = await Team.findOne({ leaderId:CurrentUser });
        if (!team) {
            return res.status(404).json({ error: "Team not found" });
        }
        // console.log(team.Members)
        const Members =
            await Promise.all(team.Members.map(async (memberId) => {
                const user = await User.findById(memberId);
                return user ? {
                    id: user._id,
                    FirstName: user.FirstName,
                    LastName: user.LastName,
                } : null;
            })
            );



        res.status(200).json(Members);
    } catch (error) {
        console.error("Error fetching team members:", error);
        res.status(500).json({ error: "Failed to fetch team members" });
    }
});

router.patch('/status', async (req, res) => {
    console.log('Query:', req.query); // Log query params
    console.log('Body:', req.body);  // Log request body
    const { id } = req.query;
    const { status } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, { Status: status });
        if (!updatedTask) throw new Error('Task not found');
        res.status(200).json({ message: 'Task status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating task status', error });
    }
});



module.exports = router;