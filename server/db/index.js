var dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
var dbString = process.env.mangoURI

const database = async () => {
  try {
    await mongoose.connect(dbString);
    console.log('MongoDB connected via Mongoose');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = database;
