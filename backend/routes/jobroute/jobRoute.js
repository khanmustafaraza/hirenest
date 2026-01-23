const express = require("express");
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../../controllers/jobcontroller/jobController");

router.post("/admin/job/create-job", createJob);
router.get("/job/get-all-jobs", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
