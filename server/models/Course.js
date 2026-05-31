const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    tags: {
      type: [String],
      default: []
    },

    level: {
      type: String,
      default: "Beginner"
    },

    duration: {
      type: String,
      default: "4 Weeks"
    },

    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Course", courseSchema);