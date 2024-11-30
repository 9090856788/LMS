import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://kanhucharansahoo595:Kanhu143@lms.wzc0l.mongodb.net/?retryWrites=true&w=majority&appName=lms"
    )
    .then(() => {
      console.log(`Database connected successfully`);
    })
    .catch((err) => {
      console.error(`Error connecting to the database: ${err.message}`);
    });
};

export default dbConnection;