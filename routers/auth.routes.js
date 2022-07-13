const router = require("express").Router();
const authController = require("../controllers/auth.controllers");

// register route
router.route("/register").post(authController.register);
// google login routes
router.route("/google").post(authController.googleLogin);
// facebook login routes
router.route("/facebook").post(authController.facebookLogin);
// forgot password route
router.route("/forgot-password").post(authController.forgotPassword);

module.exports = router;
 
