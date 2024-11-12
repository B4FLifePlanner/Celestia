const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).send({ message: 'Invalid token' });
    }
};

module.exports = authenticateUser;
