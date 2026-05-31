const express = require("express");

const {
  updateProgress,
  getUserProgress,
} = require("../controllers/progressController");

const router = express.Router();

router.post("/", updateProgress);
router.get("/:userId", getUserProgress);

module.exports = router;