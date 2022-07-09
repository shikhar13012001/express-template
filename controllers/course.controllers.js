const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Course = require("../models/course.model");

/**
 * @description - Create a new course
 * @param {object} req - The request object
 * @param {object} res - The response object
 * @returns {object} - The response object
 * @throws {error} - The error object
 * @memberof CourseController
 * @route POST /api/v1/courses/create
 */
exports.createCourse = CatchAsyncErrors(async (req, res) => {
  
  return res.status(201).json({
    success: true,
    data: 'Course created successfully 🚀',
  });

}
);

/**
 * @desc   Get all courses
 * @route  GET /api/v1/course/get-courses
 * @access public
 * @returns {object}
 **/
exports.getCourses = CatchAsyncErrors(
  async (req, res, next) => {
    return res.status(200).json({
      success: true,
      data: "Get Courses Route Working 🚀",
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
exports.getCourseDetails = CatchAsyncErrors(
  async (req, res, next) => {
    return res.status(200).json({
      success: true,
      data: "Get Course Details Route Working 🚀",
    });
  } // end of getCourseDetails
);
