import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB".cyan.bold);
  } catch (error) {
    console.error("Failed to connect to MongoDB:".cyan.bold, error.message);
  }
};
