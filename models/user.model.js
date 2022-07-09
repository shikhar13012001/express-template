// create user model
// Language: javascript
// Path: models\user.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    caregiverFName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    caregiverLName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minlength: [3, "Email must be at least 3 characters long"],
      maxlength: [255, "Email must be less than 255 characters long"],
      unique: true,
    },
  
    phoneNumber: {
      type: String,
    },
    childFName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    childLName: {
      type: String,

      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    childDOB: {
      type: Date,
    },
   },
  { timestamps: true, strict: false }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
