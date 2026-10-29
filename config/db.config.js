const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    const dbURI = process.env.DB_URI;

    if (!dbURI) {
      throw new Error("DB_URI is missing from the .env file");
    }

    await mongoose.connect(dbURI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};
