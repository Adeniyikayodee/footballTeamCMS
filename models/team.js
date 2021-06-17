const mongoose = require ('mongoose');

//basic schema for the team, as it will reflect on MongoDB atlas
const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    manager: { type: String, required: true },
    teamAlias: { type: String, required: true, unique: true },
    foundedData: { type: Date },
    manager: {
      firstName: String,
      lastNname: String,
      age: Number,
      Natiionality: String,
    },
    stadium: {
        name: String,
        capacity: Number,
        address: String,
    },
    details: {
        numPlayers: Number,
        captainName: String,
        viceCaptianName: String,
    },
  },

);

module.exports = mongoose.model('Team', teamSchema);