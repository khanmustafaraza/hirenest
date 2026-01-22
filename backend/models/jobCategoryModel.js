const { Schema, model } = require("mongoose");

const jobCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
    },
  },
  {
    timestamps: true, // todo adds createdAt & updatedAt
  }
);

const JobCategory = model("JobCategory", jobCategorySchema);

module.exports = JobCategory;
