const mongoose = require('mongoose')
const Schema = mongoose.Schema



const taskSchema = new Schema({
    Title: { type: String, required: true},
    Info: { type: String, required: true},
    AssignedTo: { type: String, required: true},
    Status: { type: String, enum: ['Pending','Waiting To Review', 'Rejected', 'Approved'], default: 'Pending', required: true},
    Deadline: { type: Date, required: true},
    created_at: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Task', taskSchema);
