const User = require('../models/User');
const Team = require('../models/Team');
const Task = require('../models/Task')
const mongoose = require('mongoose');

const checkUserRole = async (req, res, next) => {
    try {
        const {CurrentUser} = req.query;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(CurrentUser)) {
            return res.status(400).json({ message: 'Invalid User ID format' });
        }

        // Find user by ID
        const user = await User.findById(CurrentUser);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.userName = `${user.FirstName} ${user.LastName}`;

        // Role-based query assignment
        if (user.Role === 'member') {
            req.taskQuery = { AssignedTo: mongoose.Types.ObjectId(CurrentUser) }; // Query for member
        } else if (user.Role === 'manager') {
            const team = await Team.findById(user.TeamId);
            if (!team) {
                return res.status(404).json({ message: 'Team not found for manager' });
            }
            req.taskQuery = { TeamId: user.TeamId }; // Query for manager using TeamId
        } else {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        next(); // Proceed to the route
    } catch (error) {
        console.error('Error in middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
module.exports = checkUserRole