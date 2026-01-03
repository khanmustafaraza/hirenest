const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Check if MONGO_URL is provided
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in environment variables");
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Error while connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
