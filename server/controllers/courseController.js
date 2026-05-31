const Course = require("../models/Course");

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Course
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Create Course
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
};