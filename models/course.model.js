const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    duration: {
      type: Number,
    },
  },
  { timestamps: true, strict: false }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
