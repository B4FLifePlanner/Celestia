const User = require('../models/User');
const Team = require('../models/Team');

const checkUserRole = async (req, res, next) => {
    try {
        const { userId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.userName = `${user.FirstName} ${user.LastName}`;

        if (user.Role === 'member') {
            req.taskQuery = { AssignedTo: userId }; 
        } else if (user.Role === 'manager') {
            const team = await Team.findById(user.TeamId);
            if (!team) {
                return res.status(404).json({ message: 'Team not found for manager' });
            }
            req.taskQuery = { AssignedTo: { $in: team.Members } }; 
        } else {
            return res.status(403).json({ message: 'Unauthorized role' });
        }

        next(); 
    } catch (error) {
        console.error('Error in middleware:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = checkUserRole;
