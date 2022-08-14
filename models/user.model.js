// create user model
// Language: javascript
// Path: models\user.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    caregiverFName: {
      type: String,
      minlength: [0, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
      default: "",
    },
    password: {
      type: String,
      minlength: [3, "Password must be at least 3 characters long"],
    },
    caregiverLName: {
      type: String,
      minlength: [0, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
      default: "",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [3, "Email must be at least 3 characters long"],
      maxlength: [255, "Email must be less than 255 characters long"],
      unique: true,
      default: "",
    },

    phoneNumber: {
      type: String,
      default: "",
    },
    childFName: {
      type: String,
      minlength: [0, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
      default: "",
    },
    childLName: {
      type: String,
      minlength: [0, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
      default: "",
    },
    childDOB: {
      type: Date,
      default: "",
    },
    isOAuth: {
      type: Boolean,
      default: false,
    },
    bought:[String]
  },
  { timestamps: true, strict: false }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
