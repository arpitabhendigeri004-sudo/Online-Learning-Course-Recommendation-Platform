const Progress = require("../models/Progress");

// Update Progress
const updateProgress = async (req, res) => {
  try {
    const { userId, courseId, progressPercentage } = req.body;

    let progress = await Progress.findOne({
      user: userId,
      course: courseId,
    });

    if (progress) {
      progress.progressPercentage = progressPercentage;
      await progress.save();
    } else {
      progress = await Progress.create({
        user: userId,
        course: courseId,
        progressPercentage,
      });
    }

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Progress
const getUserProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      user: req.params.userId,
    }).populate("course");

    res.json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  updateProgress,
  getUserProgress,
};