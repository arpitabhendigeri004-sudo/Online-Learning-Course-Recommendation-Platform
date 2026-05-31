const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Database
const connectDB = require("./config/db");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const progressRoutes = require("./routes/progressRoutes");
// Config
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Online Learning & Course Recommendation Platform API Running");
});

// Test Route
app.get("/api/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Working Successfully"
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/progress", progressRoutes);
// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Server Error",
    error: err.message
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});