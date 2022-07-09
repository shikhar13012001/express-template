const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema(
  {
    course:{
      type: String,
    },
    courseId:{
      type: String,
    },

    videoLinks:{
      type:[
       {
        url:{
          type: String,
        },
        videoId:{
          type: String,
        }
       }
      ],
    }
  },
  { timestamps: true, strict: false }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
