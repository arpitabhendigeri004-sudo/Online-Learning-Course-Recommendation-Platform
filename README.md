# 🎓 Online Learning & Course Recommendation Platform

A modern Full-Stack MERN application that empowers learners to discover, enroll in, and track online courses while receiving personalized course recommendations based on their interests and learning progress.

---

## 🚀 Project Overview

The Online Learning & Course Recommendation Platform is designed to bridge the gap between learners and relevant educational content. The platform provides a seamless learning experience by enabling users to:

- Create and manage accounts
- Explore available courses
- Enroll in courses
- Track learning progress
- Receive personalized recommendations
- Monitor enrolled courses through an interactive dashboard

This project demonstrates full-stack development skills including frontend design, backend API development, database management, authentication, and real-world application architecture.

---


<img width="960" height="540" alt="SS1" src="https://github.com/user-attachments/assets/d4a925a1-5e0c-4c52-9af7-c0a46a78ff3d" />
<img width="960" height="540" alt="SS2" src="https://github.com/user-attachments/assets/32b826b2-ae8f-46f0-8a15-b6ae9878e950" />
<img width="960" height="540" alt="SS3" src="https://github.com/user-attachments/assets/e4582aea-0ad9-4142-807b-195289e14722" />
<img width="960" height="540" alt="SS4" src="https://github.com/user-attachments/assets/462758e4-099d-4336-a659-d99ff038c07f" />


## ✨ Key Features

### 🔐 User Authentication
- Secure User Registration
- User Login System
- Session Management
- Protected Routes
- Persistent Authentication using Local Storage

### 📚 Course Management
- View All Available Courses
- Course Details & Information
- Categorized Course Listings
- Dynamic Course Retrieval from MongoDB

### 🎯 Personalized Recommendations
- Recommendation Engine based on:
  - User Interests
  - Skills
  - Course Categories
  - Learning Preferences

### 📝 Enrollment System
- Enroll in Courses
- Prevent Duplicate Enrollments
- View Enrolled Courses
- Enrollment History Tracking

### 📈 Progress Tracking
- Monitor Learning Progress
- Percentage-Based Completion Tracking
- Course-wise Progress Visualization
- Learning Analytics Dashboard

### 📊 Interactive Dashboard
- Personalized Welcome Screen
- Course Statistics
- Progress Overview
- Learning Insights
- Recommendation Summary

### 🌐 Responsive User Interface
- Clean and Modern Design
- Mobile-Friendly Layout
- Easy Navigation
- User-Centric Experience

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- JavaScript (ES6+)
- HTML5
- CSS3
- Tailwind CSS (Optional Enhancement)

## Backend

- Node.js
- Express.js
- RESTful APIs

## Database

- MongoDB Atlas
- Mongoose ODM

## Authentication

- JWT (JSON Web Tokens)
- Password Hashing
- Protected API Routes

## Development Tools

- VS Code
- Thunder Client
- Git
- GitHub
- Nodemon
- Vite

---

# 🏗 System Architecture

```text
Frontend (React.js)
        │
        ▼
REST APIs (Express.js)
        │
        ▼
Business Logic (Controllers)
        │
        ▼
MongoDB Database
```

---

# 📂 Project Structure

```text
Online-Learning-Course-Recommendation-Platform
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Online-Learning-Course-Recommendation-Platform.git
```

```bash
cd Online-Learning-Course-Recommendation-Platform
```

---

# Backend Setup

```bash
cd server
npm install
```

### Create .env

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

### Run Backend

```bash
npm run dev
```

Server runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

```bash
cd client
npm install
```

### Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Endpoints

## Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Courses

### Get All Courses

```http
GET /api/courses
```

### Create Course

```http
POST /api/courses
```

---

## Enrollments

### Enroll User

```http
POST /api/enrollments
```

### Get User Enrollments

```http
GET /api/enrollments/:userId
```

---

## Progress

### Update Progress

```http
POST /api/progress
```

### Get Progress

```http
GET /api/progress/:userId
```

---

## Recommendations

### Get Personalized Recommendations

```http
GET /api/recommendations/:userId
```

---

# 📸 Core Functionalities

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Course Creation

✅ Course Listing

✅ Course Enrollment

✅ Learning Progress Tracking

✅ Personalized Recommendations

✅ Dashboard Analytics

✅ Responsive Navigation

✅ Protected Routes

---

# 🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

- Full-Stack MERN Development
- REST API Design
- Authentication & Authorization
- MongoDB Database Modeling
- Frontend-Backend Integration
- State Management
- Responsive UI Development
- Git & GitHub Version Control
- Real-World Project Architecture

---

# 🚀 Future Enhancements

- AI-Based Course Recommendation Engine
- Video Course Integration
- Certificates Generation
- Quiz & Assessment Module
- Instructor Dashboard
- Admin Panel
- Payment Gateway Integration
- Real-Time Notifications
- Discussion Forums
- Learning Streak Tracking

---

# 👩‍💻 Author

### Arpita Bhendigeri

---

# ⭐ Support

If you found this project useful:

⭐ Star the Repository

🍴 Fork the Repository

📢 Share with Others

---

## Thank You for Visiting! 🚀
