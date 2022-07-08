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
    }
);