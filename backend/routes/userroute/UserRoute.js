const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const userController = require("../../controllers/usercontroller/UserController");
const verifyToken = require("../../middlewares/token-middleware");

// ✅ Create uploads folder if it doesn't exist
const uploadPath = path.join(process.cwd(), "uploads"); // safer than __dirname
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.originalname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

// ✅ File filter
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "profile_Pic") {
    const allowedImages = /jpeg|jpg|png|webp/;
    const isValid =
      allowedImages.test(file.mimetype) &&
      allowedImages.test(path.extname(file.originalname).toLowerCase());
    return isValid
      ? cb(null, true)
      : cb(new Error("Only image files are allowed for profile picture"));
  }

  if (file.fieldname === "resume") {
    const allowedDocs = /pdf|doc|docx/;
    const isValid =
      allowedDocs.test(file.mimetype) &&
      allowedDocs.test(path.extname(file.originalname).toLowerCase());
    return isValid
      ? cb(null, true)
      : cb(new Error("Only PDF/DOC/DOCX files are allowed for resume"));
  }

  cb(new Error("Unknown file field"));
};

// ✅ Multer config
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

// ✅ Middleware
const uploadMiddleware = (req, res, next) => {
  upload.fields([
    { name: "profile_Pic", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    next();
  });
};

// ✅ Upload route
router.post(
  "/user/add-user-profile",
  uploadMiddleware,
  verifyToken,
  userController.createProfile,
);
router.get(
  "/user/user-profile-by-id",
  verifyToken,
  userController.getProfileByUserId,
);

router.get("/user/uploads/:filename", userController.serveUploadedFile);

router.post("/user/apply-job-application/:id",verifyToken ,userController.userAppliedJobApplication)





// ✅ Download route (admin)

module.exports = router;
