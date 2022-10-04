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

exports.updateProgress = CatchAsyncErrors(async (req, res, next) => {
  const { userId, courseId, week, videoCode } = req.body.data;
  // find total number of videos in week
  const course = await Course.findOne({ courseId: courseId });
  const totalVideo = course.contents.find((content) => content.week === week)
    .list.length;
  // update progress of that week in progress model
  const progress = await Progress.findOne({ userId: userId });
  //check if courseId is present in progress model
  if (!progress.progress.find((course) => course.courseId === courseId)) {
    // if not present then add courseId to progress model
    progress.progress.push({
      courseId: courseId,
      videos: [
        {
          week: week,
          videoCodes: [videoCode],
          isCompleted: false,
        },
      ],
    });
  } else {
    // check if that week is present in progress model if not then add week to progress model in mongodb
    if (
      !progress.progress
        .find((course) => course.courseId === courseId)
        .videos.find((video) => video.week === week)
    ) {
      progress.progress
        .find((course) => course.courseId === courseId)
        .videos.push({
          week: week,
          videoCodes: [videoCode],
          isCompleted: false,
        });
    }

    // if present then check if videoCode is present in progress model
    if (
      !progress.progress
        .find((course) => course.courseId === courseId)
        .videos.find((video) => video.week === week)
        .videoCodes.includes(videoCode)
    ) {
      // if not present then add videoCode to progress model
      progress.progress
        .find((course) => course.courseId === courseId)
        .videos.find((video) => video.week === week)
        .videoCodes.push(videoCode);
    }
  }
  // check if all videos are completed in that week
  if (
    progress.progress
      .find((course) => course.courseId === courseId)
      .videos.find((video) => video.week === week).videoCodes.length ===
    totalVideo
  ) {
    // if all videos are completed then update isCompleted to true
    progress.progress
      .find((course) => course.courseId === courseId)
      .videos.find((video) => video.week === week).isCompleted = true;
  }
  // save progress model
  await progress.save();
  const prevVideo = course.contents.find((content) => content.week === week);
  const prevVideoIndex = prevVideo.list.findIndex(
    (video) => video.videoCode === videoCode
  );

  let nextVideo = null;
  let isnextWeek = 0;
  // check if next video is present if not, then check if next week is present and if present then send next video
  if (prevVideo.list[prevVideoIndex + 1]) {
    nextVideo = prevVideo.list[prevVideoIndex + 1];
  } else {
    const nextWeek = course.contents.find(
      (content) => content.week === week + 1
    );
    if (nextWeek) {
      nextVideo = nextWeek.list[0];
      isnextWeek =1;
    }
  }




  return res.status(200).json({
    success: true,
    data: {
      isAvailable: nextVideo ? true : false,
      prevWeek: week,
      nextWeek: isnextWeek ? week + 1 : week,
      nextVideo: nextVideo,
      prevVideo: prevVideo.list[prevVideoIndex],
    },
  });
});

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
    const user = await User.findById(userId);
    // check locked or unlocked status of course
    const course = await Course.find({});
    const courseIds = course.map((course) => course.courseId);
    // get ratio of video watched to total videos in all week of all courses
    const progressRatio = course.map((item) => {
      const totalVideo = item.contents.reduce((acc, curr) => {
        return acc + curr.list.length;
      }, 0);
      // get total videos watched in that week of that course from progress model
      const totalWatched = progress.progress
        .find((t) => t.courseId === item.courseId)
        ?.videos?.reduce((acc, curr) => {
          return acc + curr.videoCodes.length;
        }, 0);
      return {
        courseId: item.courseId,
        ratio: totalWatched / totalVideo,
      };
    });

    const userProgress = {
      userId: userId,
      progress: courseIds.map((courseId) => {
        const courseMap = course.filter(
          (course) => course.courseId === courseId
        )[0];
        const isBought = user.bought.find((course) => course === courseId);
        return {
          courseId: courseId,
          ratio: progressRatio.find((ratio) => ratio.courseId === courseId)
            .ratio,
          progress: courseMap.contents.map((content) => {
            const p = progress.progress
              ?.filter((course) => course.courseId === courseId)[0]
              ?.videos?.filter((video) => video.week === content.week)[0];

            // previous week progress
            const pw = p?.videos?.filter(
              (video) => video.week === content.week - 1
            )[0];

            return {
              week: content.week,
              weekName: content.weekName,
              lists: content.list.map((list) => {
                return {
                  ...list._doc,
                  isLocked:
                    // Boolean(isBought) &&
                    (content.week === 1 ||
                      p?.videoCodes.includes(list.videoCode) ||
                      pw?.isCompleted)
                      ? false
                      : true,
                };
              }),
              isCompleted: p?.isCompleted ? true : false,
            };
          }),
        };
      }),
    };
    return res.status(200).json({
      success: true,
      data: userProgress,
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

9;
