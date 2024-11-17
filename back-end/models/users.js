const mongoose = require('mongoose') //library to use mongoDB
const Schema = mongoose.Schema; // build the schema which is class


const bookSchema = new Schema({
    Author: {type: String, required: true},
    Name: {type: String, required: true},
    Status: {type: String, enum: ['Not Started', 'Reading', 'Completed'], required: true},
    Pages: {type: Number, required: true},
    Current: {type: Number, required: true},
    Rating: {type: Number, required: true},
    Note: {type: String}
})

const travelSchema = new Schema({
    Place: {type: String, required: true},
    Date: {type: Date, required: true},
    Needs: {type: [String], required: true},
})

const to_doSchema = new Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Status: {type: String, enum: ['Not Completed', 'Completed'], default: 'Not Completed', required: true},
    Deadline: {type: Date,  required: true},
})

const userSchema = new Schema ({
        date_joined: { type: Date, default: Date.now() },
        Role: { type: String, enum: ['manager', 'member', 'personal'], required: true },
        TeamId : {type: Schema.Types.ObjectId, ref: 'Team', required: false, default:null},
        FirstName: {type: String, required: true},
        LastName: {type: String, required: true},
        DOB: {type: Date, required: true},
        Gender: {type: String, required: true},
        Email: {type: String, required: true},
        Phone: {type: Number, required: true},
        Password: {type: String, required: true},
        Book: [bookSchema],
        To_Do: [to_doSchema],
        Travel: [travelSchema],
})

// The name of collection in database and enter the document
module.exports = mongoose.model('users', userSchema) 