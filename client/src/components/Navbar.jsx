import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">
        EduRecommend
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/enrolled">Enrolled</Link>
        <Link to="/progress">Progress</Link>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;