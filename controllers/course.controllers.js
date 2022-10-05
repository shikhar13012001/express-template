const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Course = require("../models/course.model");
const changeNullToZero = (val) => {
  return val === null ? 0 : val;
};
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
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
  const { course, courseId, contents } = req.body.data;
  const newCourse = await Course.create({
    course,
    courseId,
    contents,
  });

  return res.status(201).json({
    success: true,
    data: newCourse,
  });
});

/**
 * @desc   Get all courses
 * @route  GET /api/v1/course/get-courses
 * @access public
 * @returns {object}
 **/
exports.getCourses = CatchAsyncErrors(
  async (req, res, next) => {
    const courses = await Course.find();
    return res.status(200).json({
      success: true,
      data: courses,
    });
  } // end of getCourses
);

/**
 * @desc   Get course details
 * @route  GET /api/v1/course/get-course-details/:userId/:courseId
 * @access public
 * @returns {object}
 * @param {string} id
 * @returns {object}
 **/
exports.getCourseDetails = CatchAsyncErrors(
  async (req, res, next) => {
    // get course Id
    const { courseId, userId } = req.params;
    // get course details
    const resp = await fetch(
      `${
        // get domain path from req object
        req.protocol
      }://${req.get("host")}/api/v1/user/get-progress/${userId}`
    );
    const data = await resp.json();
    const f=data.data.progress.filter((course) => course.courseId === courseId)[0];
    return res.status(200).json({
      success: true,
      data: f.progress,
    });
  } // end of getCourseDetails
);


/**
 * @desc  get-watched-progess
 * @route  GET /api/v1/course/get-watched-progess/:userId
 * @access public
 * @returns {object}
 */

exports.getWatchedProgess = CatchAsyncErrors(
  async (req, res, next) => {
    const { userId } = req.params;
    const resp = await fetch(
      `${
        // get domain path from req object
        req.protocol
      }://${req.get("host")}/api/v1/user/get-progress/${userId}`
    );
    const data = await resp.json();
    return res.status(200).json({
      success: true,
      data: data.data.progress.map((course) => course.ratio),
    });
  }) // end of getWatchedProgess