const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobDetails,
  updateJob,
  deleteJob,
  jobApplicationController,
  jobFilterByCategory,
  toggleJobIsFeatured,
  jobDeleteController
} = require("../../controllers/jobcontroller/jobController");

router.post("/admin/job/create-job", createJob);
router.get("/job/get-all-jobs", getAllJobs);
router.get("/user/job/job-details/:id", getJobDetails);
router.get("/admin/job-application/:id", jobApplicationController);
router.get("/job-filter-by-category/:id", jobFilterByCategory);
// router.get("/:id", getJobById);
router.put("/admin/job-update-isfeatured/:id",  toggleJobIsFeatured);
router.delete("/admin/job-delete/:id", jobDeleteController);

module.exports = router;
