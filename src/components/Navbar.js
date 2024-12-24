import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active link functionality
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Brand/Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="ZAT Logo" className="me-2" />
        </a>

        {/* Toggler Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-3">
              <NavLink
                exact
                to="/"
                className="nav-link fw-bold"
                activeClassName="active"
              >
                الرئيسية
                <span className="underline"></span>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                to="/scholarship"
                className="nav-link fw-bold"
                activeClassName="active"
              >
                المنح الدراسية
                <span className="underline"></span>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                to="/student-form"
                className="nav-link fw-bold"
                activeClassName="active"
              >
                التقديم
                <span className="underline"></span>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink
                to="/support"
                className="nav-link fw-bold"
                activeClassName="active"
              >
                أسئلنا
                <span className="underline"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
