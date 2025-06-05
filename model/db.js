const mongoose = require('mongoose');
require('dotenv').config()
const localdb = process.env.localdb;

async function connectDB() {
  try {
    await mongoose.connect(localdb, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // exit process if connection fails
  }
}

module.exports = connectDB;