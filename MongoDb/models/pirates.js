const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const CrewSchema = new Schema({
    name: String,
    bounty : Number,
    haki: Boolean,
});

const PiratesSchema = new Schema({
    team: String,
    Crews: [CrewSchema]
});

const Pirates = mongoose.model('pirates', PiratesSchema);

module.exports = Pirates;
