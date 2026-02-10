const { Schema, model } = require("mongoose");

const jobApplicationSchema = new Schema(
  {
    jobId: {
      type: Schema.Types.ObjectId,
      ref :"Job"
    },
    profileId: {
      type: Schema.Types.ObjectId,
      ref :"UserProfile"
    },
    email:{
        type:String,
    }
   
  },
  {
    timestamps: true, // todo adds createdAt & updatedAt
  }
);

const JobApplication = model("JobApplication", jobApplicationSchema);

module.exports = JobApplication;
