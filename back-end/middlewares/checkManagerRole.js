const User = require('../models/User') 

const checkManagerRole = async (req, res, next) => {
    const userId = req.user._id; 
    const user = await User.findById(userId); 

    if (!user || user.Role !== 'manager') {
        return res.status(403).json({ message: 'Unauthorized role' });
    }

    req.teamId = user.TeamId;
    next();
};

module.exports = checkManagerRole