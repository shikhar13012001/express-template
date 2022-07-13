const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");
const Course = require("../models/course.model");
const Progress = require("../models/progress.model");

/**
 * @desc Login user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @route POST /api/v1/auth/login
 * @access public
 * @returns {Object}
 **/
exports.login = CatchAsyncErrors(
  async (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
      return next(new ErrorHandler(400, "Email is required"));
    }
   // get user
    const user = await User.findOne({ email });
    res.status(200).json({
      success: true,
      data:user
    });
  } // end of login
);






/**
 * @desc   Register user
 * @route  POST api/v1/auth/register
 * @access public
 **/
exports.register = CatchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body.data;

  if (!email) {
    return next(new ErrorHandler("Please enter your email", 400));
  }
  // save user to database
  const userSaved = await User.create({
    email: email,
    password: password || "",
    ...req.body.data,
  });
  // create progress for user
  // const courses = await Course.find({}, { _id: 0, courseId: 1, course: 1 });

  await Progress.create({
    userId: userSaved._id,
    progress: []
  });

  return res.status(200).json({
    success: true,
    data: userSaved,
  });
});

/**
 * @desc   Google sign in
 * @route  POST api/v1/auth/google
 * @access public
 **/
exports.googleLogin = CatchAsyncErrors(async (req, res, next) => {
  const FirebaseObj = req.body.data;
  const { email } = FirebaseObj;
  // check if already exists
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(200).json({
      success: true,
      data: user,
    });
  }
  // save user to database
  const userSaved = await User.create({
    email: email,
    password: "",
    ...FirebaseObj,
  });

  return res.status(200).json({
    success: true,
    data: userSaved,
  });
});

/**
 * @desc   Facebook sign in
 * @route  POST api/v1/auth/facebook
 * @access public
 **/
exports.facebookLogin = CatchAsyncErrors(async (req, res, next) => {
  const FirebaseObj = req.body.data;
  const { email } = FirebaseObj;
  // check if already exists
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(200).json({
      success: true,
      data: user,
    });
  }
  // save user to database
  const userSaved = await User.create({
    email: email,
    password: "",
    ...FirebaseObj,
  });

  return res.status(200).json({
    success: true,
    data: userSaved,
  });
});

/**
 * @desc   Forgot password -> it actually updates password
 * @route  POST api/v1/auth/forgot-password
 * @access public
 **/
exports.forgotPassword = CatchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body.data;
  // update password
  const user = await User.findOne({ email: email });
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  user.password = password;
  await user.save();

  return res.status(200).json({
    success: true,
    data: user,
  });
});
