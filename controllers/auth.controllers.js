const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user.model");

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
    password: password,
    ...req.body.data,
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
