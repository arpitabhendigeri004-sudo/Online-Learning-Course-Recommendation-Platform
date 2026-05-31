import { useEffect, useState } from "react";
import API from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-10">
        Explore Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold">
              {course.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {course.description}
            </p>

            <p className="mt-3 font-semibold">
              {course.category}
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;