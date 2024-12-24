import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const staticUsername = "admin";
    const staticPassword = "securepassword123";

    if (username === staticUsername && password === staticPassword) {
      localStorage.setItem("isAdminAuthenticated", true); // Save authentication flag in localStorage
      navigate("/admin-panel"); // Redirect to admin panel
    } else {
      alert("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">تسجيل الدخول إلى لوحة التحكم</h2>
      <form
        onSubmit={handleLogin}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
        className="bg-light rounded"
      >
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            اسم المستخدم:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            كلمة المرور:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
