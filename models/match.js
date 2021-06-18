//Importing modules here
const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
    opponentName: { type: String, required: true, unique: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    status: {
        finished: Boolean,
        cancelled: Boolean,
        postponed: Boolean,
        ongoing: Boolean,
        pending: Boolean,
    }
}); 

module.exports = mongoose.model('Match', MatchSchema);
