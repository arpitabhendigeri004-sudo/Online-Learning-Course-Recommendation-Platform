const express = require("express");

const {
  enrollCourse,
  getUserEnrollments,
} = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", enrollCourse);

router.get("/:userId", getUserEnrollments);

module.exports = router;