import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "var(--primary-color)" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/admin">
          لوحة التحكم
        </Link>
        <div>
          <Link className="btn me-2" style={{ color: "var(--primary-color)", backgroundColor: "white" }} to="/links">
            روابط المستندات
          </Link>
          <Link className="btn me-2" style={{ color: "var(--primary-color)", backgroundColor: "white" }} to="/admin-support">
            اسئلة الدعم
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
