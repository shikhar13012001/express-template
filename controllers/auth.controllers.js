const CatchAsyncErrors = require('../middlewares/CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');


/**
 * @desc   Login user
 * @route  POST api/v1/auth/login
 * @access public
 **/
exports.login = CatchAsyncErrors(async (req, res, next) => {
   return res.status(200).json({
    success: true,
    data: 'Login Route Working 🚀',
  });
})

/**
 * @desc   Register user
 * @route  POST api/v1/auth/register
 * @access public
 **/
exports.register = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
     success: true,
     data: 'Register Route Working 🚀',
      });
    });


/**
 * @desc   Google sign in
 * @route  POST api/v1/auth/google
 * @access public
 **/
exports.googleLogin = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
     success: true,
     data: 'Google Login Route Working 🚀',
      });
    }
  );

  /**
   * @desc   Facebook sign in
   * @route  POST api/v1/auth/facebook
   * @access public
   **/
  exports.facebookLogin = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
     success: true,
     data: 'Facebook Login Route Working 🚀',
      });
    } 
  );

  /**
   * @desc   Forgot password
   * @route  POST api/v1/auth/forgot-password
   * @access public
   **/
  exports.forgotPassword = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
     success: true,
     data: 'Forgot Password Route Working 🚀',
      });
    }
  );

  /**
   * @desc   Reset password
   * @route  POST api/v1/auth/reset-password
   * @access public
   * @param  {string} token
   * @param  {string} password
   * @param  {string} confirmPassword
   * @return {object}
   * @throws {object}
   * @throws {string}
   **/
  exports.resetPassword = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
     success: true,
     data: 'Reset Password Route Working 🚀',
      });
    });