const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  createUser,
  findUserByEmail,
} = require("../models/userModel");

// REGISTER USER
const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  findUserByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (results.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      createUser(
        username,
        email,
        hashedPassword,
(err, result) => {
          if (err) {
            return res.status(500).json(err);
          }

          res.status(201).json({
            message: "User registered successfully",
          });
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  });
};


// LOGIN USER
const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

if (results.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = results[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
res.status(200).json({
      message: "Login successful",
      token,
    });
  });
};

module.exports = {
  register,
  login,
};

