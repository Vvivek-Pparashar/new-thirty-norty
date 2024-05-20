import React, { useState } from "react";
// import './HeroPage.css'
import Carousel from "./Carousel";

const HeroPage = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div className="hero-container">
      <div className="container hero-content">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="display-1 text-uppercase mb-lg-4" style={{ color: "#cfff95" }}>
              Welcome
            </h1>
            <h1 className="text-uppercase text-white mb-lg-4">to Thirty40</h1>
            <p className="fs-4 text-white mb-lg-4">
              Dolore tempor clita lorem rebum kasd eirmod dolore diam eos
              kasd. Kasd clita ea justo est sed kasd erat clita sea
            </p>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a
                href=""
                className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default HeroPage;