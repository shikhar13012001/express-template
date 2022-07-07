const router = require("express").Router();
const userController = require("../controllers/user.controllers");

// Get_realtime_notifications
router
  .route("/get-realtime-notifications/:id")
  .get(userController.getRealtimeNotifications);
// Get_user_details
router.route("/get-user-details/:id").get(userController.getUserDetails);

module.exports = router;
