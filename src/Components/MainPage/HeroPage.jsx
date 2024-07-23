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
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center text-lg-start hero-txt">
            <h1
              className="display-1 text-uppercase mb-lg-4"
              style={{ color: "#cfff95", fontSize: 3 + "rem" }}
            >
              Welcome to thirty40
            </h1>
            {/* <h1 className="text-uppercase text-white mb-lg-4">to Thirty40</h1> */}
            <p className="fs-4 fs-sm-2 text-white mb-lg-3 mt-lg-0 mt-4">
              We have first hand experience in what is required to become a
              tennis professional. We have built a community where we have all
              the resources to help every tennis player by providing him/her
              counselling as per his/her goal.
            </p>
            <div className="pt-5 ps-lg-0 ps-5">
              <a
                href="#2"
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
