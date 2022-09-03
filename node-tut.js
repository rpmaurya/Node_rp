const mongoose = require('mongoose');
const noderpSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    email: String,
    address: String
});
module.exports = mongoose.model('node-tuts', noderpSchema);