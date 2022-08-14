const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");
const Course = require("../models/course.model");
const Progress = require("../models/progress.model");
const bcrypt = require("bcrypt");

const func=async (user)=>{
  const CourseIds = user.bought;
  // get courses
  const courses = await Course.find({},{_id:0,courseId:1,course:1});
  const obj = {};
  courses.forEach((course) => {
    if (CourseIds.includes(course.courseId)) {
      obj[course.course] = course.courseId;
    } else {
      obj[course.course] = null;
    }
  });
  return obj;
}







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
    const { email } = req.body.data;
    if (!email) {
      return next(new ErrorHandler(400, "Email  is required"));
    }
    // get user
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler(400, "Invalid email"));
    }
    // get progress
   
    // get courses
   const obj=await func(user);

    res.status(200).json({
      success: true,
      data: { ...user._doc, ...obj },
    });
  } // end of login
);

/**
 * @desc   Register user
 * @route  POST api/v1/auth/register
 * @access public
 **/
exports.register = CatchAsyncErrors(async (req, res, next) => {
  const { email } = req.body.data;

  if (!email) {
    return next(new ErrorHandler("Please enter your email", 400));
  }
  // save user to database
  const userSaved = await User.create({
    email: email,
    ...req.body.data,
  });
  // create progress for user
  // const courses = await Course.find({}, { _id: 0, courseId: 1, course: 1 });

  await Progress.create({
    userId: userSaved._id,
    progress: [],
  });
 
  // get courses
     const obj = await func(userSaved);

  return res.status(200).json({
    success: true,
    data: {...userSaved._doc, ...obj},
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
    ...FirebaseObj,
    isOAuth: true,
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
    ...FirebaseObj,
    isOAuth: true,
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
  const { userId, oldPassword, newPassword } = req.body.data;
  // update password
  const user = await User.findById(userId);
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }
  if (user.isOAuth) {
    return next(new ErrorHandler("User is unAuthorized", 403));
  }
  // compare password with hashed password
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return next(new ErrorHandler("Invalid old password", 400));
  }
  // update password
  user.password = newPassword;
  await user.save();
  return res.status(200).json({
    success: true,
    data: user,
  });
});
