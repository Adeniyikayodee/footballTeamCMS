import mongoose from 'mongoose';

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
const Team = mongoose.model('Team', teamSchema);
export default team;