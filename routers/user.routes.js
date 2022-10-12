const router = require("express").Router();
const userController = require("../controllers/user.controllers");

// Get_realtime_notification
router
  .route("/get-realtime-notifications/:id")
  .get(userController.getRealtimeNotifications);
// Get_user_details
router.route("/get-user-details/:id").get(userController.getUserDetails);
// Update_progress
router.route("/update-progress").post(userController.updateProgress);
// Get_progress
router.route("/get-progress/:id").get(userController.getProgress);
// update_user_details
router.route("/update-user-details/:id").post(userController.updateUserDetails);


module.exports = router;
