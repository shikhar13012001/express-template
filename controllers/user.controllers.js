const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

/**
 * @desc   get-realtime-notifications
 * @route  GET /api/v1/user/get-realtime-notifications/:id
 * @access public
 * @returns {object}
 * @param {string} id
 **/
exports.getRealtimeNotifications = CatchAsyncErrors(
  async (req, res, next) => {
    return res.status(200).json({
      success: true,
      data: "Get Realtime Notifications Route Working 🚀",
    });
  } // end of getRealtimeNotifications
);

/**
 * @desc   get-user-details
 * @route  GET /api/v1/user/get-user-details/:id
 * @access public
 * @returns {object}
 * @param {string} id
 * @returns {object}
 **/
exports.getUserDetails = CatchAsyncErrors(
  async (req, res, next) => {
    return res.status(200).json({
      success: true,
      data: "Get User Details Route Working 🚀",
    });
  } // end of getUserDetails
);
