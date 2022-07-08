const router = require("express").Router();
const contactController = require("../controllers/contact.controller");
// contact routes
router.route("/").post(contactController.createContact);

module.exports = router;
