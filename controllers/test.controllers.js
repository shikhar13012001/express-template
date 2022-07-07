const CatchAsyncErrors = require('../middlewares/CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');

/**
 * @desc    Test the API
 * @route   GET /test
 * @access  public
 */
exports.test = CatchAsyncErrors(async (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: 'Test route working 😀',
  });
});
