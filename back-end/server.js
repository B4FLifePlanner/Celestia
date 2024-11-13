const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
connectDB()
const userRoutes = require('./routes/users')
const teamRoutes = require('./routes/teams')
const taskRoutes = require('./routes/tasks')
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())




app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes)
app.use('/api/teams', teamRoutes)




app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000')
})