// const validateDeadline = (req, res, next) => {
//     const { Deadline } = req.body;
//     const deadlineDate = new Date(Deadline);
//     const currentDate = new Date();
  
//     if (deadlineDate <= currentDate) {
//       return res.status(400).json({ error: 'Deadline must be in the future.' });
//     }
  
//     next();
//   };
  
// module.exports = validateDeadline;