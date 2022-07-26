const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");
const Progress = require("../models/progress.model");
const Notifications = require("../models/notification.model");
const Course = require("../models/course.model");
/**
 * @desc   get-realtime-notifications
 * @route  GET /api/v1/user/get-realtime-notifications/:id?page=pageNumber
 * @access public
 * @returns {object}
 * @param {string} id
 **/
exports.getRealtimeNotifications = CatchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    const { page } = req.query;
    if (!id) {
      return next(new ErrorHandler(400, "User ID is required"));
    }
    const notifications = await Notifications.find({
      userId: id,
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .skip((page - 1) * 10);

    return res.status(200).json({
      success: true,
      data: notifications,
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
    const { courseId, videoId, userId, week } = req.body.data;
    // update or create progress
    // find if videoId exists in progress
    //find progress for user
    const isProgress = await Progress.findOne({
      userId: userId,
      "progress.courseId": courseId,
    });
    let progress = isProgress;
    if (!isProgress) {
      //update progress for that course and weeks
      progress = await Progress.findOneAndUpdate(
        { userId: userId },
        {
          $push: {
            progress: {
              courseId: courseId,
              videos: Array(52)
                .fill(0)
                .map((_, i) => {
                  return {
                    accessable: i == 0 ? true : false,
                    week: i + 1,
                    videosID: [],
                  };
                }),
            },
          },
        }
      );
    }
    //get videos lenght for that week with that course id from Course model
    const videosLength = await Course.findOne(
      {
        courseId: courseId,
        "videoLinks.week": week,
      },
      {
        _id: 0,
        "videoLinks.$": 1,
      }
    );
    const isFull =
      videosLength.videoLinks[0].videos.length ===
      progress?.progress
        ?.filter((t) => t.courseId === courseId)[0]
        ?.videos?.filter((t) => t.week == week)[0]?.videosID?.length;
    const newProgress = await Progress.findOneAndUpdate(
      {
        userId: userId,
      },
      {
        $push: {
          "progress.$[doc1].videos.$[doc2].videosID": { videoId: videoId },
        },
        //set video to accessable
        $set: {
          "progress.$[doc1].videos.$[doc3].accessable": isFull,
          "progress.$[doc1].videos.$[doc2].accessable": true,
        },
      },
      {
        arrayFilters: [
          { "doc1.courseId": courseId },
          {
            "doc2.week": week,
            "doc2.videosID.videoId": {
              $ne: videoId,
            },
          },
          { "doc3.week": week + 1 },
        ],
        new: true,
      }
    );

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

/**
 * @desc   update-user-details
 * @route  PUT /api/v1/user/update-user-details
 * @access public
 * @returns {object}
 * @param {string} id
 * @returns {object}
 * */
exports.updateUserDetails = CatchAsyncErrors(
  async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return next(new ErrorHandler(404, "User not found"));
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        ...req.body.data,
      },
      { new: true, returnNewDocument: true }
    );
    return res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } // end of updateUserDetails
);
