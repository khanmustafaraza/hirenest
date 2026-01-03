const { Router } = require("express");
const router = Router();

const authController = require("../../controllers/authcontroller/authController");

router.post("/create-account", authController.registerController);
// router.post("/login", authController.login);

module.exports = router;
