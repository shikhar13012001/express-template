const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    levels: {
      type: [
        {
          level: {
            type: Number,
          },
          title: { type: String },
          description: { type: String },
        },
      ],
    },
    author: {
      type: String,
    }
  },
  { timestamps: true, strict: false }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
