import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ page }) => {
  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  console.log(mobileNav);

  const changeNavBg = () => {
    window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${
          navBg ? "sticky-top" : ""
        }`}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 10000,
        }}
      >
        <Link to="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Thirty40
          </h1>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${mobileNav ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              India
            </Link>
            <Link to="/" className="nav-item nav-link">
              Europe
            </Link>
            <Link to="/" className="nav-item nav-link">
              USA
            </Link>
            <Link to="/" className="nav-item nav-link">
              Global
            </Link>
            <Link to="/" className="nav-item nav-link">
              Tennis Academies
            </Link>
            <Link to="/" className="nav-item nav-link">
              Career Counselling
            </Link>

            <Link
              to="/EnquireNow"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Enqire Now <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
