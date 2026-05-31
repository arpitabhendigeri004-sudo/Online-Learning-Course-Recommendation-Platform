import { useEffect, useState } from "react";
import API from "../services/api";

function Progress() {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    fetchProgress();
  }, []);

  const fetchProgress = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      const res = await API.get(
        `/progress/${user._id}`
      );

      setProgress(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Learning Progress</h1>

      {progress.map((item) => (
        <div
          key={item._id}
          style={{
            marginBottom: "20px",
          }}
        >
          <h3>{item.course?.title}</h3>

          <div
            style={{
              width: "100%",
              background: "#ddd",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                width: `${item.progressPercentage}%`,
                background: "#16a34a",
                color: "white",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {item.progressPercentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Progress;