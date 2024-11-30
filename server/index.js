import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnection from "./db/dbConnection.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
