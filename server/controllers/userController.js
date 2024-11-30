import { User } from "../models/userSchema";
import bcrypt from "bcryptjs";

// User register API
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check name, email and password are filled or not
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check if the user is already exist or not
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User email is already exist",
      });
    }
    const hashedPassword = bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
