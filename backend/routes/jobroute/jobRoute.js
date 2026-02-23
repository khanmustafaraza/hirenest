const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobDetails,
  updateJob,
  deleteJob,
  jobApplicationController
} = require("../../controllers/jobcontroller/jobController");

router.post("/admin/job/create-job", createJob);
router.get("/job/get-all-jobs", getAllJobs);
router.get("/user/job/job-details/:id", getJobDetails);
router.get("/admin/job-application/:id", jobApplicationController);
// router.get("/:id", getJobById);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
