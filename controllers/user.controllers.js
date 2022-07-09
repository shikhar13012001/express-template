const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");
const Progress = require("../models/progress.model");
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
    //send user details
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new ErrorHandler(404, "User not found"));
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } // end of getUserDetails
);

/**
 * @desc   update-progress
 * @route  PUT /api/v1/user/update-progress
 * @access public
 * @returns {object}
 */

exports.updateProgress = CatchAsyncErrors(
  async (req, res, next) => {
    const { courseId, videoId, userId } = req.body.data;
    // update or create progress
    // find if videoId exists in progress
    let newProgress;
    newProgress = await Progress.findOne({
      userId: userId,
      "progress.videoId": videoId,
    });
    if (!newProgress) {
      newProgress = await Progress.findOneAndUpdate(
        { userId: userId },
        {
          $push: {
            progress: {
              courseId: courseId,
              videoId: videoId,
            },
          },
        },
        { new: true, upsert: true, returnNewDocument: true }
      );
    }
    return res.status(200).json({
      success: true,
      data: newProgress,
    });
  } // end of updateProgress
);

/**
 * @desc   get-progress
 * @route  GET /api/v1/user/get-progress/:id
 * @access public
 * @returns {object}
 */
exports.getProgress = CatchAsyncErrors(
  async (req, res, next) => {
    const userId = req.params.id;
    const progress = await Progress.findOne({ userId: userId });
    if (!progress) {
      return next(new ErrorHandler(404, "User not found"));
    }
    return res.status(200).json({
      success: true,
      data: progress,
    });
  } // end of getProgress
);
