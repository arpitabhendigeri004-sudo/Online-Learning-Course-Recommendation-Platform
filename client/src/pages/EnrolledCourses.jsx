import { useEffect, useState } from "react";
import API from "../services/api";

function EnrolledCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadEnrollments();
  }, []);

  const loadEnrollments = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get(
        `/enrollments/${user._id}`
      );

      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Enrolled Courses</h1>

      {courses.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "15px",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h2>{item.course?.title}</h2>
          <p>{item.course?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EnrolledCourses;