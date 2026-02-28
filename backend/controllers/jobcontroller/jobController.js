const JobApplication = require("../../models/jobApplicationModel");
const Job = require("../../models/jobModel");
const UserProfile = require("../../models/UserProfileModel");

/**
 * Create Job
 */
const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Jobs
 */
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("categoryName")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Job By ID
 */
const getJobDetails = async (req, res) => {
  try {
    // const { jobId } = req.body;

    // Validate jobId

    // Find job by ID
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Return job details
    res.status(200).json({
      success: true,
      message: "Job details fetched successfully",
      job, // send the full job object
    });
  } catch (error) {
    console.error("Get job details error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching job details",
    });
  }
};
/**
 * Update Job
 */
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Job
 */
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    await job.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid job ID",
    });
  }
};
// jobs find  by category

//  applications of user find by job id

const jobApplicationController = async (req, res) => {
  try {
    const jobId = req.params.id;

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Find applications for this job
    const applications = await JobApplication.find({ jobId })
      .populate({
        path: "userId",
        select: "-password -__v", // hide sensitive fields
      })
      .populate("profileId")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Job applications fetched successfully",
      totalApplications: applications.length,
      job,
      applications,
    });
  } catch (error) {
    console.error("Job application error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// job filter by category
const jobFilterByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;

    // Check if job exists
    const categoryJob = await Job.find({ categoryName: categoryId });
    if (!categoryJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Find applications for this job

    return res.status(200).json({
      success: true,
      message: "Job filter  successfully",
      data: categoryJob,
    });
  } catch (error) {
    console.error("Job filter error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
const toggleJobIsFeatured = async (req, res) => {
  try {
    const jobId = req.params.id;
    console.log(jobId)

    // Check if job exists
    const updateIsFeatured = await Job.findByIdAndUpdate({ _id: jobId },{
      isFeatured:true
    });
    if (!updateIsFeatured) {
      return res.status(404).json({
        success: false,
        message: "Job not Updated",
      });
    }

    // Find applications for this job

    return res.status(200).json({
      success: true,
      message: "Job updated  successfully",
      isUpdate:true
    });
  } catch (error) {
    console.error("Job update error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
const jobDeleteController = async (req, res) => {
  try {
    const jobId = req.params.id;
    console.log(jobId)

    // Check if job exists
    const jobDelete = await Job.findByIdAndDelete({ _id: jobId });
    if (!jobDelete) {
      return res.status(404).json({
        success: false,
        message: "Job not delete",
      });
    }

    // Find applications for this job

    return res.status(200).json({
      success: true,
      message: "Job delete  successfully",
     
    });
  } catch (error) {
    console.error("Job delete error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * Export Controllers
 */
module.exports = {
  createJob,
  getAllJobs,
  getJobDetails,
  updateJob,
  deleteJob,
  jobApplicationController,
  jobFilterByCategory,
  toggleJobIsFeatured,
  jobDeleteController
};
