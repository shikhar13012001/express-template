const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true, strict: false }
);

const ContactModel = mongoose.model("Contact", contactSchema);
module.exports = ContactModel;
 