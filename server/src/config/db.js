const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vidyora_ai';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Vidyora Server] MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[Vidyora Server] MongoDB Connection Error: ${error.message}`);
    console.warn(`[Vidyora Server] Running in mock database fallback mode if MongoDB remains unavailable.`);
    return null;
  }
};

module.exports = connectDB;
