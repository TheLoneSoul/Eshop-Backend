import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const db_uri = process.env.MONGODB_URI;

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(db_uri, {
      serverSelectionTimeoutMS: 20000,
    });
    console.log(`Database connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default dbConnection;
