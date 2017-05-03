const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    bounty : Number,
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
