const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    categoryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobCategory",
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    companyWebLink: {
      type: String,
      trim: true,
    },

    jobLocation: {
      type: String,
      required: true,
      trim: true,
    },

    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Internship", "Contract", "Remote"],
      required: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    experience: {
      type: String,
      trim: true,
    },

    applicationDeadline: {
      type: Date,
      required: true,
    },

    contactEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    requirements: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    tags: {
      type: [String],
      default: [],
    },

    jobDescription: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Job", jobSchema);
