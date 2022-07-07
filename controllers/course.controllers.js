const CatchAsyncErrors = require('../middlewares/CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');

/**
 * @desc   Get all courses
 * @route  GET /api/v1/course/get-courses
 * @access public
 * @returns {object}
 **/
exports.getCourses = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        data: 'Get Courses Route Working 🚀',
    });
    } // end of getCourses
);

/**
 * @desc   Get course details
 * @route  GET /api/v1/course/get-course-details/:id
 * @access public
 * @returns {object}
 * @param {string} id
 * @returns {object}
 **/
exports.getCourseDetails = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        data: 'Get Course Details Route Working 🚀',
    });
    } // end of getCourseDetails
);