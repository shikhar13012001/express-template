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

    videoLinks: {
      type: [
        {
          week: {
            type: Number,
          },
          videos: [
            {
              youtubeLink: String,
              vimeoLink: String,
            },
          ],
        },
      ],
    },
  },
  { timestamps: true, strict: false }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
