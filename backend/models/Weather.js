// models/Weather.js
const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  date: { type: Date, index: true },
  avgTemp: Number,
  maxTemp: Number,
  minTemp: Number,
  dominantCondition: String,
  hourlyData: [{
    hour: Number,
    temp: Number,
    condition: String
  }]
});
module.exports = mongoose.model('Weather', weatherSchema);