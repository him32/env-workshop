import React from "react";
import { Link, useLocation } from "react-router-dom";
import gbu from "../assets/logo/gbuLogo.webp";
import skill from "../assets/Untitled design/Skill_India.png";
import "../css/navbar.css";

const Navbar = () => {
  const location = useLocation(); // ✅ Get the current route

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        {/* ✅ Left Logo */}
        <div className="d-flex align-items-center">
          <Link to="https://www.gbu.ac.in" className="navbar-brand">
            <img src={gbu} alt="Gautam Buddha University" width={75} />
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
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

        {/* ✅ Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {[
              { name: "Home", path: "/home" },
              { name: "About", path: "/about" },
              { name: "Committee", path: "/committee" },
              { name: "Gallery", path: "/gallery" },
              { name: "Verify Certificate", path: "/verify-certificate" },
              { name: "Schedule", path: "/schedule" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${
                    location.pathname === item.path
                      ? "active fw-bold text-primary"
                      : ""
                  }`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Right Logo */}
        <div className="d-flex align-items-center">
          <Link to="https://www.skillindiadigital.gov.in/" className="navbar-brand">
            <img src={skill} alt="Skill India" width={75} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
