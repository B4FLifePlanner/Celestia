const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahmadmajar98:B4flifeplanner@cluster0.6xzuu.mongodb.net/LifePlanner?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongodb connected')
    }
    catch (error) {
        console.error('MongoDB connection error:', error.message)
    }
}

module.exports = connectDB;
