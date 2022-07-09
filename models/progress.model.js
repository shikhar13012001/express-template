const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  progress: [
    {
      courseId: {
        type: String,
      },
      videoId: {
        type: String,
      },
    },
  ],
});

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;
