const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: [true, "Course is required"],
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    total_price: {
      type: Number,
    },
  },
  { timestamps: true, strict: false }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
