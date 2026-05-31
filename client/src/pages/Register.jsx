import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);

      alert("Registration Successful");
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <br />
      <br />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <br />
      <br />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;