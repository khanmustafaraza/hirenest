const { Router } = require("express");
const router = Router();

const authController = require("../../controllers/authcontroller/authController");

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);

module.exports = router;
