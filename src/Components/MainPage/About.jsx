import React, { useState } from "react";
import sn1 from "../../../public/img/about.jpg";

const About = () => {
  const [user, setUser] = useState(1);
  return (
    <div>
      <div className="container-fluid py-lg-5 py-4">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: 500 + "px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={sn1}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  We strive to provide services that exceeds expectations
                </h1>
              </div>
              <h4 className="text-body mb-4">
                Effective coaching based on the statistics of the international tennis circuit and player-specific detailed information
              </h4>
              <div className="bg-light p-4">
                <ul
                  className="nav nav-pills justify-content-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className={`nav-link text-uppercase w-100 ${user == 1 ? "active" : ""
                        }`}
                      id="pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-1"
                      aria-selected="true"
                      onClick={() => setUser(1)}
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className={`nav-link text-uppercase w-100 ${user == 2 ? "active" : ""
                        }`}
                      id="pills-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-2"
                      type="button"
                      role="tab"
                      aria-controls="pills-2"
                      aria-selected="false"
                      onClick={() => setUser(2)}
                    >
                      Our Vission
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className={`tab-pane fade show ${user == 1 ? "active" : ""
                      }`}
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0">
                      We follow a system of transparency, which is lacking in the current Indian tennis system, and create player-centric coaching programs. We provide technical and tactical coaching based on a long-term guidance plan segregated into short-term targets, with reality checks of the players’ strengths and weaknesses
                    </p>
                  </div>
                  <div
                    className={`tab-pane fade show ${user == 2 ? "active" : ""
                      }`}
                    id="pills-2"
                    role="tabpanel"
                    aria-labelledby="pills-2-tab"
                  >
                    <p className="mb-0">
                      Our team consists of certified coaches and professional tennis players who have first-hand experience and exposure of the journey of tennis as a career and related pathways. This enables us to make the whole process easier and player-centric.
                    </p>
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

export default About;
