import executeQuery from "../db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const register = async (req, res) => {
  try {
    // Check if user already exists
    const q = "SELECT * FROM users WHERE email = ? or username = ?";
    const result = await executeQuery(q, [req.body.email, req.body.username]);

    if (result[0]) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    if (!req.body.password) {
      return res.status(400).json({
        error: "Password is required",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    // Save user to database
    const qq = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
    await executeQuery(qq, [req.body.username, req.body.email, hashedPassword]);

    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export const login = (req, res) => {
  res.json("Hello World! from controller");
};

export const logout = (req, res) => {
  res.json("Hello World! from controller");
};
