const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to db");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(0); // Exit process with failure
  }
};

module.exports = connectDb;
