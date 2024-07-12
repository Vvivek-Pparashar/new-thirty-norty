import { RampRight, Widgets } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import sn1 from "../../../public/img/logo.png";
import "./NavBar.css";

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
      {/* <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0"> */}
      {/* <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div> */}
      {/* <div className="col-lg-6 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${navBg ? "sticky-top" : ""
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
          <img src={sn1} className="nav-logo-thirty40" />
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
            <Link to="/India" className="nav-item nav-link">
              India
            </Link>
            <Link to="/Europe" className="nav-item nav-link">
              Europe
            </Link>
            <Link to="/USA" className="nav-item nav-link">
              USA
            </Link>
            <Link to="/Global" className="nav-item nav-link">
              Global
            </Link>
            <Link
              to="/Services/v1"
              className={`nav-item nav-link ${page == "Tennis Academies" ? "active" : ""
                }`}
            >
              Tennis Academies
            </Link>
            <Link to="/Services/v2" className="nav-item nav-link">
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
