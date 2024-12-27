import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="container">
        <NavLink
          className="navbar-brand fw-bold text-white"
          to="/admin"
          style={{ fontSize: "1.5rem" }}
        >
          لوحة التحكم
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="adminNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item"> {/* Added margin-end */}
              <NavLink
                className="btn"
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "white",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
                to="/Links"
              >
                روابط المستندات
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn"
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "white",
                  marginBottom: "10px",
                }}
                to="/admin-support"
              >
                اسئلة الدعم
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
