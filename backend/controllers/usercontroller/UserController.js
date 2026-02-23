const fs = require("fs");
const path = require("path");
const UserProfile = require("../../models/UserProfileModel");
const Register = require("../../models/registerModel");
const jobModel = require("../../models/jobModel");
const JobApplication = require("../../models/jobApplicationModel");

const createProfile = async (req, res) => {
  try {
    const { fullName, phone, dob, experience, address } = req.body;

    // 🔎 Check if profile already exists
    const existingProfile = await UserProfile.findOne({ userId: req.user._id });

    if (existingProfile) {
      // ❌ Delete uploaded files if profile exists
      if (req.files?.profile_Pic?.[0]) {
        fs.unlinkSync(
          path.join(
            process.cwd(),
            "uploads",
            req.files.profile_Pic[0].filename,
          ),
        );
      }

      if (req.files?.resume?.[0]) {
        fs.unlinkSync(
          path.join(process.cwd(), "uploads", req.files.resume[0].filename),
        );
      }

      return res.status(400).json({
        error: "User profile already exists",
      });
    }

    // ✅ Continue if profile does NOT exist
    const profile_Pic = req.files?.profile_Pic?.[0].filename;
    const resume = req.files?.resume?.[0].filename;

    if (!profile_Pic || !resume) {
      return res
        .status(400)
        .json({ error: "Both profile picture and resume are required" });
    }

    const newUserProfile = new UserProfile({
      userId: req.user._id,
      profile_Pic,
      fullName,
      phone,
      dob,
      experience,
      address,
      resume,
    });

    await newUserProfile.save();

    await Register.findByIdAndUpdate(req.user._id, {
      isProfile: true,
    });

    res.status(201).json({
      success: true,
      message: "Profile uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getProfileList = async (req, res) => {
  try {
    const profiles = await UserProfile.find()
      .populate("userId", "email role isProfile") // optional
      .sort({ createdAt: -1 });

    if (!profiles.length) {
      return res.status(404).json({
        success: false,
        message: "No profiles found",
      });
    }

    res.status(200).json({
      success: true,
      count: profiles.length,
      data: profiles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getProfileByUserId = async (req, res) => {
  try {
    // console.log(req.user._id);
    const profile = await UserProfile.findOne({ userId: req.user._id });
    // console.log(profile)
    if (profile) {
      return res.status(200).json({
        success: true,
        data: profile,
      });
    }
  } catch (error) {}
};
// Serve uploaded files (image / resume)
const serveUploadedFile = (req, res) => {
  const { filename } = req.params;

  const filePath = path.join(process.cwd(), "uploads", filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: "File not found" });
  }

  // Set proper Content-Type for images
  const ext = path.extname(filename).toLowerCase();
  if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
    res.setHeader("Content-Type", `image/${ext.replace(".", "")}`);
  } else if (ext === ".pdf") {
    res.setHeader("Content-Type", "application/pdf");
  }

  res.sendFile(filePath);
};

//  user applied job application

const userAppliedJobApplication = async (req, res) => {
  try {
    const jobId = req.params.id;
    const findJob = await jobModel.findOne({ _id: jobId });
    const findUser = await Register.findOne({ _id: req.user._id });
    const findProfile = await UserProfile.findOne({ userId: findUser._id });
    // console.log(findProfile)

    // console.log(findJob)
    // console.log(findUser)

    const newJobApplication = await JobApplication({
      jobId: findJob._id,
      profileId: findProfile._id,
      userId: findUser._id,
      email: findUser.email,
    });
    const exsitJob = await JobApplication.findOne({ jobId: findJob._id });
    if (exsitJob) {
      return res.status(409).json({
        success: false,
        msg: "This Job is Already Applied",
      });
    }
    const savedJobApplication = await newJobApplication.save();
    return res.status(201).json({
      success: true,
      msg: "Job Applied Successfully",
      data: savedJobApplication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const userAppliedJobApplicationList = async (req, res) => {
  try {
    // const findJobList = await JobApplication.find({userId:req.user._id}).populate()

    const findJobList = await JobApplication.find({
      userId: req.user._id,
    })
      // .populate("userId")
      // .populate("profileId")

      .populate("jobId");
    //  console.log(findJobList)

    return res.status(200).json({
      success: true,
      msg: "Applied Job Fetched Successfully",
      data: findJobList,
    });

    // console.log(findProfile)

    // console.log(findJob)
    // console.log(findUser)

    //    const findJobList = await JobApplication.find({
    //   userId: req.user._id
    // }).populate([
    //   { path: "userId" },
    //   { path: "profileId" },
    //   { path: "jobId" }
    // ]);

    // const findJobList = await JobApplication.find({
    //   userId: req.user._id
    // }).populate([
    //   { path: "userId", select: "name email" },
    //   { path: "profileId", select: "title skills" },
    //   { path: "jobId", select: "jobTitle company salary" }
    // ]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createProfile,
  getProfileList,
  getProfileByUserId,
  serveUploadedFile,
  userAppliedJobApplication,
  userAppliedJobApplicationList,
};
