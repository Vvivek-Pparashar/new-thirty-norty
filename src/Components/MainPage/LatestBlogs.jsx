import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Latest Blog</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Latest Articles From Our Blog Post
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="row g-0 bg-light overflow-hidden">
                  <div className="col-12 col-sm-5 h-100">
                    <img
                      className="img-fluid h-100"
                      src="img/blog-1.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="bi bi-bookmarks me-2"></i>Web Design
                        </small>
                        <small>
                          <i className="bi bi-calendar-date me-2"></i>01 Jan,
                          2045
                        </small>
                      </div>
                      <h5 className="text-uppercase mb-3">
                        Dolor sit magna rebum clita rebum dolor
                      </h5>
                      <p>
                        Ipsum sed lorem amet dolor amet duo ipsum amet et dolore
                        est stet tempor eos dolor
                      </p>
                      <Link className="text-primary text-uppercase" href="">
                        Read More<i className="bi bi-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="row g-0 bg-light overflow-hidden">
                  <div className="col-12 col-sm-5 h-100">
                    <img
                      className="img-fluid h-100"
                      src="img/blog-2.jpg"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="bi bi-bookmarks me-2"></i>Web Design
                        </small>
                        <small>
                          <i className="bi bi-calendar-date me-2"></i>01 Jan,
                          2045
                        </small>
                      </div>
                      <h5 className="text-uppercase mb-3">
                        Dolor sit magna rebum clita rebum dolor
                      </h5>
                      <p>
                        Ipsum sed lorem amet dolor amet duo ipsum amet et dolore
                        est stet tempor eos dolor
                      </p>
                      <Link className="text-primary text-uppercase" href="">
                        Read More<i className="bi bi-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
