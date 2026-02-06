const { Schema, model, default: mongoose } = require("mongoose");

const userProfileSchema = new Schema(
  {
    userId: {
      type:Schema.Types.ObjectId,
      ref: "Register",
    },
    profile_Pic:{
        type:String
    },
    fullName: {
      type: String,
    },

    phone: {
      type: String,
    },

    dob: {
      type: Date,
    },
    experience: {
      type: String,
    },

    address: {
      type: String,
    },
    resume: {
      type: String,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  },
);

const UserProfile = model("UserProfile", userProfileSchema);

module.exports = UserProfile;
