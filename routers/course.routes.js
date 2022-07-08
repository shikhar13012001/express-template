const router = require("express").Router();
const courseController = require("../controllers/course.controllers");

// Get_courses
router.route("/get-courses").get(courseController.getCourses);
// Get_course_details
router.route("/get-course-details/:id").get(courseController.getCourseDetails);
// Create_course
router.route("/create-course").post(courseController.createCourse);

module.exports = router;
