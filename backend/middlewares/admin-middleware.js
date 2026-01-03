const Register = require("../models/registerModel");

const adminVerify = async (req, res, next) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized — user info missing",
      });
    }

    const existUser = await Register.findById(req.user._id);
    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!existUser.isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Access denied — Admins only",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error during admin verification",
    });
  }
};

module.exports = adminVerify;
