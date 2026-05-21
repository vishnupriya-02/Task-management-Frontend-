import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    // Admin
    if(userId === "101") {

      localStorage.setItem("role", "admin");

      navigate("/dashboard");
    }

    // Team Lead
    else if(userId === "102") {

      localStorage.setItem("role", "teamlead");

      navigate("/dashboard");
    }

    // Employee
    else if(userId === "103") {

      localStorage.setItem("role", "employee");

      navigate("/dashboard");
    }

    else {
      alert("Invalid ID");
    }
  };

  return (

    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded shadow w-96">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Login
        </button>

        <div className="mt-5 text-sm text-gray-500">

          <p>Admin → 101</p>
          <p>Team Lead → 102</p>
          <p>Employee → 103</p>

        </div>

      </div>

    </div>

  );
}

export default Login;