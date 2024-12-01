import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dbConnection from "./db/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 3000;
const app = express();

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Api endpoints
app.use("/api/v1/user", userRoutes);

//DB Connection
dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
