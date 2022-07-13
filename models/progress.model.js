const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  progress: [{
    courseId: {
      type: String,
    },
    videos: [
      {
        accessable: {
          type: Boolean,
          default: false,
        },
        week: Number,
        videosID: [{ videoId: String }],
      },
    ],
  }],
});

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;
