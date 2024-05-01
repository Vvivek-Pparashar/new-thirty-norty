import React, { useState } from "react";
import './HeroPage.css'

const HeroPage = () => {
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div>
      <div className="container-fluid bg-primary mb-5 hero-header" style={{paddingTop:"140px", paddingBottom:"70px"}}>
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase mb-lg-4" style={{color:"#cfff95"}}>
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
                {/* <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                  Play Video
                </h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
