const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = new Schema(
  {
     
    userId: { type: String, required: [true, "User ID is required"] },
    orderId: { type: String, required: [true, "Order ID is required"] },
    billingDetails: {
      agreeTerms: { type: Boolean },
      countryOrRegion: { type: String },
      state: { type: String },
      houseNumber: { type: String },
      streetAddress: { type: String },
      suburb: { type: String },
      postcode: { type: String }, // why postcode is string?
      subscribeStatus: { type: Boolean },
    },
    orderDetails: {
      course: { type: String },
      quantity: { type: Number },
      totalPrice: { type: Number },
    },
    userDetails:{type: Schema.Types.ObjectId, ref: "User"}
  },
  { timestamps: true, strict: false }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
