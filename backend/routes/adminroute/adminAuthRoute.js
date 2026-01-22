const express = require("express");
const verifyToken = require("../../middlewares/token-middleware");
const adminVerify = require("../../middlewares/admin-middleware");

const router = express.Router();

// ✅ Protected admin route
router.post("/verify-admin-route", verifyToken, adminVerify, (req, res) => {
  // You can return minimal info, frontend only cares if it succeeds
  return res.status(200).json({ success: true });
});

module.exports = router;
