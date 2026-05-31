const User = require("../models/User");
const Course = require("../models/Course");

const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const recommendations = await Course.find({
      $or: [
        { category: { $in: user.interests } },
        { tags: { $in: user.skills } },
      ],
    });

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRecommendations,
};