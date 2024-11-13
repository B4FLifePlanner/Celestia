const mongoose = require('mongoose')
const Schema = mongoose.Schema



const taskSchema = new Schema({
    TeamId: {type: Schema.Types.ObjectId, ref: 'Team', required: true },
    Title: { type: String, required: true},
    Info: { type: String, required: true},
    AssignedTo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    Status: { type: String, enum: ['Pending','Waiting To Review', 'Rejected', 'Approved'], default: 'Pending', required: true},
    Deadline: { type: Date, required: true},
    created_at: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Task', taskSchema);
