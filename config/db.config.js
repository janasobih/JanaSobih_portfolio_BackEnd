const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};
