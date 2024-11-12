const express = require('express')
const connectDB = require('./db')
connectDB()
const userRoutes = require('./routes/users')
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())




app.use('/api/users', userRoutes);




app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000')
})