import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

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
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create the user
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
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or Password",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // Generate token and activate user session
    generateToken(res, user, `Welcome back ${user.name}`);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
