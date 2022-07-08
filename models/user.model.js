// create user model
// Language: javascript
// Path: models\user.model.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    caregiverFirstName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    caregiverLastName: {
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
    password: {
      type: String,
      minlength: [3, "Password must be at least 3 characters long"],
      maxlength: [255, "Password must be less than 255 characters long"],
    },
    phoneNumber: {
      type: String,
    },
    childFirstName: {
      type: String,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    childLastName: {
      type: String,

      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [255, "Name must be less than 255 characters long"],
    },
    childBirthDate: {
      type: Date,
    },
   },
  { timestamps: true, strict: false }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
