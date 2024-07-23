import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Get In Touch
              </h5>
              {/* <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p> */}
              <p className="mb-2 d-flex">
                <i className="bi bi-geo-alt text-primary me-2"></i>FN-5, 3 F,
                HVR, Ward 8, Mehrauli, 110030, New Delhi, India
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                info@thirty40.in
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2"></i>
                +91-7892650335
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Countries
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-body mb-2" to="/India">
                  <i className="bi bi-arrow-right text-primary me-2"></i>India
                </Link>
                <Link className="text-body mb-2" to="/USA">
                  <i className="bi bi-arrow-right text-primary me-2"></i>USA
                </Link>
                <Link className="text-body mb-2" to="/Europe">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Europe
                </Link>
                <Link className="text-body mb-2" to="/Global">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Global
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Quick Links
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-body mb-2" to="/">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </Link>
                <Link className="text-body mb-2" to="/AboutUs">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </Link>
                <Link className="text-body mb-2" to="/Services">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </Link>

                <Link className="text-body mb-2" to="/ContactUs">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </Link>
                <Link className="text-body" to="/T&C">
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Terms & Conditions
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Newsletter
              </h5>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <Link
                  className="btn btn-outline-primary btn-square me-2"
                  to="https://x.com/_thirty40"
                >
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary btn-square me-2"
                  to="https://www.facebook.com/thirty40worldwidelaunchers/"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary btn-square me-2"
                  to="https://www.linkedin.com/company/thirty40/"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary btn-square"
                  to="https://www.instagram.com/_thirty40/"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy; Your Site Name . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">Designed by Thiry40 developer Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
