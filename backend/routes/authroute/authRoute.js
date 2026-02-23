const { Router } = require("express");
const router = Router();

const authController = require("../../controllers/authcontroller/authController");
const verifyToken = require("../../middlewares/token-middleware");
const adminVerify = require("../../middlewares/admin-middleware");

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.get("/admin/user-list", verifyToken,adminVerify, authController.userListController);

module.exports = router;
