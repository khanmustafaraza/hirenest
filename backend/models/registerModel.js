const { Schema, model } = require("mongoose");

const registerSchema = new Schema(
  {
    userName: {
      type: String,
      // required: [true, "Username is required"],
      // trim: true,
      // minlength: [3, "Username must be at least 3 characters"],
      // maxlength: [30, "Username cannot exceed 30 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    password: {
      type: String,
      // required: [true, "Password is required"],
      // minlength: [6, "Password must be at least 6 characters long"],
      // select: false, // prevents password from being returned by default
    },

    // role: {
    //   type: String,
    //   enum: ["jobseeker", "jobcreator"],
    //   default: "jobseeker",
    // },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    isProfile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Register = model("Register", registerSchema);

module.exports = Register;
