const router = require("express").Router();
const courseController = require("../controllers/course.controllers");

// Get_courses
router.route("/get-courses").get(courseController.getCourses);
// Get_course_details
router.route("/get-course-details/:userId/:courseId").get(courseController.getCourseDetails);
// Create_course
router.route("/create-course").post(courseController.createCourse);
// Get watched progress
router
  .route("/get-watched-progess/:userId")
  .get(courseController.getWatchedProgess);
module.exports = router;
