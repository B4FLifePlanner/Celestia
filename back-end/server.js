// models --->  collection
// controlers ===> endPoint

const express = require('express')
const connectDB = require('./database')
connectDB()
const registerPoint = require('./controlers/registerPoint.js')
const loginPoint = require("./controlers/loginPoint.js")
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express()





app.use(express.json())
app.use(cors());
app.use('/api/createUser', registerPoint);
app.use('/api/loginUser', loginPoint);




app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000')
})