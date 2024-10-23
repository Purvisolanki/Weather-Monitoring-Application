// models/Alert.js
const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  city: String,
  condition: String,
  threshold: Number,
  timestamp: Date,
  consecutive: Number
});

module.exports = mongoose.model('Alert', alertSchema);