// config/database.js
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://purvi:Purvi%40123@cluster0.2z0at.mongodb.net/rule-engine?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;