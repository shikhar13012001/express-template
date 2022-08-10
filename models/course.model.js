const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema(
  {
    course: {
      type: String,
    },
    courseId: {
      type: String,
    },

    contents: [
      {
        week: {
          type: Number,
        },
        weekName: {
          type: String,
        },
        list: [
          {
            index: Number,
            videoTitle: String,
            videoLink: String,
            videoCode: String,
          },
        ],
      },
    ],
  },
  { timestamps: true, strict: false }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
