const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ✅ Create uploads folder if it doesn't exist
const uploadPath = path.join(process.cwd(), "uploads"); // safer than __dirname
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
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
    if (err) return res.status(400).json({ error: err.message });
    next();
  });
};

// ✅ Upload route
router.post("/user/add-user-profile", uploadMiddleware, (req, res) => {
  try {
    const { fullName, email, phone } = req.body; // text fields
    const profilePic = req.files?.profile_Pic?.[0];
    const resume = req.files?.resume?.[0];

    if (!profilePic || !resume) {
      return res.status(400).json({ error: "Both profile and resume required" });
    }

    console.log("Text fields:", fullName, email, phone);
    console.log("Files:", profilePic.filename, resume.filename);

    res.status(200).json({
      success: true,
      message: "Profile uploaded successfully",
      profilePic: profilePic.filename,
      resume: resume.filename,
      fullName,
      email,
      phone,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Download route (admin)
router.get("/admin/download-resume/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadPath, filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  res.download(filePath, filename, (err) => {
    if (err) res.status(500).send("Error downloading file");
  });
});

module.exports = router;
