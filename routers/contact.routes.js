const router = require("express").Router();
const contactController = require("../controllers/contact.controller");
// contact routes
router.route("/").post(contactController.createContact);
// get all contacts
router.route("/get-contacts").get(contactController.getContacts);
module.exports = router;
