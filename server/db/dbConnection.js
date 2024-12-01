import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log(`Database connected successfully`);
      })
      .catch((err) => {
        console.error(`Error connecting to the database: ${err.message}`);
      });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
