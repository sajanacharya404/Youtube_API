import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database Connected : DB host ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Database connection error", error);
    process.exit(1);
  }
};
