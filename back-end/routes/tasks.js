const express = require('express')
const Task = require('../models/Task')
const Team = require('../models/Team')
const User = require('../models/User')
const mongoose = require('mongoose')
const checkUserRole = require('../middlewares/checkWorkTasks')


const router = express.Router()



// router.post('/Add-Task', async (req, res) => {
//     const {
//         Title,
//         Info,
//         AssignedTo,
//         Deadline
//     } = req.body

//     try {
//         const newTask = new Task({
//             Title,
//             Info,
//             AssignedTo,
//             Deadline
//         })
//         await newTask.save()
//         res.status(200).json({
//             task: newTask
//         })
//     }
//     catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// })

// router.get('/:userId', checkUserRole, async (req, res) => {
//     try {
//         const tasks = await Task.find(req.taskQuery);

//         if (tasks.length === 0) {
//             return res.status(404).json({ message: 'No tasks found' });
//         }

//         res.status(200).json({ userName: req.userName, tasks });
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

router.get("/get-members", async (req, res) => {
    const { CurrentUser } = req.query;
    console.log(CurrentUser)

    // if (!CurrentUser) {
    //     return res.status(400).json({ error: "CurrentUser is required" });
    // }

    try {
        const team = await Team.findOne({ leaderId: new mongoose.Types.ObjectId(CurrentUser) });
        // console.log(team)
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
        console.log(Members)



        res.status(200).json(Members);
    } catch (error) {
        console.error("Error fetching team members:", error);
        res.status(500).json({ error: "Failed to fetch team members" });
    }
});
module.exports = router