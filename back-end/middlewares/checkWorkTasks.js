const User = require('../models/User'); 
const Team = require('../models/Team');

const checkUserRole = async (req, res, next) => {
    try {
        const { userId } = req.params; 

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check user's role
        if (user.Role === 'member') {
            // For a member, fetch only their tasks
            req.taskQuery = { AssignedTo: userId };
        } else if (user.Role === 'manager') {
            // For a manager, fetch the team's tasks
            const team = await Team.findById(user.TeamId);
            if (!team) {
                return res.status(404).json({ message: 'Team not found for manager' });
            }
            req.taskQuery = { AssignedTo: { $in: team.Members } }; // Fetch tasks assigned to all team members
        } else {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        next(); // Proceed to the route handler
    } catch (error) {
        console.error('Error in middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = checkUserRole