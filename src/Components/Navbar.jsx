import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gbu from "../assets/logo/gbuLogo.webp";
import sponsor from "../assets/logo/sponsor.png";
import "../css/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to close navbar on small screens when a link is clicked
  const handleNavLinkClick = () => {
    setIsCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div className="container-fluid d-flex align-items-center">
        {/* ✅ Left Logo */}
        <div className="d-flex align-items-center order-1 order-lg-1">
          <a
            href="https://www.gbu.ac.in"
            className="navbar-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gbu} alt="Gautam Buddha University" width={75} />
          </a>
        </div>

        {/* ✅ Navbar Links */}
        <div
          className={`collapse navbar-collapse justify-content-center order-3 order-lg-2 ${
            isCollapsed ? "" : "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {[
              { name: "Home", path: "/home" },
              { name: "About Workshop", path: "/about" },
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
                  onClick={handleNavLinkClick}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Right Logo */}
        <div className="d-flex align-items-center order-2 order-lg-3">
          <a
            href="https://spbbindia.org/"
            className="navbar-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={sponsor} alt="Sponsor Logo" width={120} />
          </a>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="navbar-toggler order-4 order-lg-0"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
