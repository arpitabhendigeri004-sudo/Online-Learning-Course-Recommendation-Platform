const Enrollment = require("../models/Enrollment");

// Enroll User
const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const existing = await Enrollment.findOne({
      user: userId,
      course: courseId,
    });

    if (existing) {
      return res.status(400).json({
        message: "Already enrolled",
      });
    }

    const enrollment = await Enrollment.create({
      user: userId,
      course: courseId,
    });

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Enrollments
const getUserEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      user: req.params.userId,
    }).populate("course");

    res.json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  enrollCourse,
  getUserEnrollments,
};