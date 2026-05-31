function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-2xl text-gray-600 mb-10">
        {user?.name}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold">
            Courses Enrolled
          </h3>

          <p className="text-6xl font-bold mt-4">
            4
          </p>
        </div>

        <div className="bg-green-600 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold">
            Progress
          </h3>

          <p className="text-6xl font-bold mt-4">
            40%
          </p>
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold">
            Recommended
          </h3>

          <p className="text-6xl font-bold mt-4">
            6
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;