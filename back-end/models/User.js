const mongoose = require('mongoose')
const Schema = mongoose.Schema;


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
        Role: { type: String, enum: ['manager', 'member', 'personal'],default: 'personal', required: true },
        TeamId : {type: Schema.Types.ObjectId, ref: 'Team', required: false, default:null},
        FirstName: {type: String, required: true},
        LastName: {type: String, required: true},
        DOB: {type: Date, required: true},
        Gender: {type: String, required: true},
        Email: {type: String, required: true},
        Phone: {type: Number, required: true},
        Password: {type: Number, required: true},
        confirmPassword: {type: Number, required: true},
        Book: [bookSchema],
        To_Do: [to_doSchema],
        Travel: [travelSchema],
     

})


module.exports = mongoose.model('User', userSchema)