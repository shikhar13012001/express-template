const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Contact = require("../models/contact.model");

/*
 * @route   POST /api/v1/contact
 * @desc    Create a new contact
 * @access  Public
 */

exports.createContact = CatchAsyncErrors(async (req, res, next) => {
  const { name, email, message } = req.body.data;
  const newContact = await Contact.create({ name, email, message });
  res.status(200).json({
    success: true,
    data: newContact,
  });
});

/*
 * @route   GET /api/v1/contact
 * @desc    Get all contacts
 * @access  Public
 * @returns {object}
 */
exports.getContacts = CatchAsyncErrors(async (req, res, next) => {
  const contacts = await Contact.find();
  res.status(200).json({
    success: true,
    data: contacts,
  });
});
