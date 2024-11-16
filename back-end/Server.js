const express = require('express')
const connectDB = require('./db')
const userRoutes = require('./routes/users')
const taskRoutes = require('./routes/tasks')
const teamRoutes = require('./routes/teams')
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())


app.use(cors());


// app.use('/api/users', userRoutes)
// app.use('/work/tasks', taskRoutes)
app.use('/api', teamRoutes)



app.listen(PORT, () => {
    connectDB()
    console.log('Server running on http://localhost:5000')
})