const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotifSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderId: {
      type: String,
    },
    type: {
      type: String,
    },

    notification: {
      type: String,
    },
  },
  { timestamps: true, strict: false }
);

const Notifications = mongoose.model("Notifications", NotifSchema);

module.exports = Notifications;
