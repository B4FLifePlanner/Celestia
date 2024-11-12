const mongoose = require('mongoose')
const Schema = mongoose.Schema


const messageSchema = new Schema({
    TeamId: {type: Schema.Types.ObjectId, ref:'Team', required: true},
    Sender: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    Content: {type: String, required: true},
    Time: {type: Date, required: true},
})

module.exports = mongoose.model('Message', messageSchema);
