const Register = require("../../models/registerModel");
const { hashPassword, comparePassword } = require("../../utlis/password");
const generateToken = require("../../utlis/token");

// ✅ CREATE A NEW ACCOUNT CONTROLLER
const registerController = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Validate fields
    if (!username || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check valid role
    if (!["jobcreator", "jobseeker"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role. Must be jobcreator or jobseeker",
      });
    }

    // Check duplicate email
    const existAccount = await Register.findOne({ email });
    if (existAccount) {
      return res.status(400).json({
        success: false,
        message: "Account already exists with this email",
      });
    }

    // Hash password & save
    const hashed = await hashPassword(password);
    const newUser = await Register.create({
      userName: username,
      email,
      password: hashed,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: error.message,
    });
  }
};

// ✅ LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const existAccount = await Register.findOne({ email });
    if (!existAccount) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await comparePassword(password, existAccount.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken({
      _id: existAccount._id,
      role: existAccount.role,
      isAdmin: existAccount.isAdmin,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      payload: {
        user: {
          username: existAccount.userName,

          role: existAccount.role,
          isAdmin: existAccount.isAdmin,
        },

        token: token,
      },
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message,
    });
  }
};

// ✅ Update / Delete (placeholders)
const updateAccount = async (req, res) => {
  try {
    // To be implemented
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    // To be implemented
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { registerController };
