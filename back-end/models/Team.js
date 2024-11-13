const mongoose = require('mongoose')

const Schema =  mongoose.Schema

const teamSchema = new Schema({
    TeamName: {type: String, required: true},
    leaderId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    Members: [{type: Schema.Types.ObjectId, ref: 'User', required: true}]   
})

module.exports = mongoose.model('Team', teamSchema);
