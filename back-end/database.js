const mongoose = require('mongoose') // library to use mongoDB

//connect to database in mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahmadmajar98:B4flifeplanner@cluster0.6xzuu.mongodb.net/LifePlanner?retryWrites=true&w=majority&appName=Cluster0');  // the result it is promise for that we use a async
        console.log('mongodb connected successfuly')
    }
    catch (error) {
        console.error('MongoDB connection error:', error.message)
    }
}    
//export for the connect
module.exports = connectDB;