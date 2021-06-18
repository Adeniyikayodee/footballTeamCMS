//Importing modules here
const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    dob: { type: Date, required: true },
    jerseyNo: { type: Number, required: true },
    contractType: { type: String, required: true },
}); 

module.exports = mongoose.model('Player', PlayerSchema);