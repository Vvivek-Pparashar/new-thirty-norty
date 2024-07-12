import React from "react";
import "./Countries.css";
import NavBar from "../NavBar/NavBar";
import img4 from "../../../public/img/vivek6.png";
import Footer from "../Footer/Footer";
// import CountryService from "./countriesServices/CountryService";
import { ScrollRestoration } from "react-router-dom";
import OurCenter from "../MainPage/OurCenter";

const India = () => {
  return (
    <>
      <NavBar page={"India"} />
      <div
        className={`INDIA container-fluid bg-primary mb-5 SH1`}
        style={{
          // paddingInline: "100px",
          paddingTop: "295px",
          paddingBottom: "200px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h1
          className="display-4 text-uppercase mb-lg-4"
          style={{ color: "white", textAlign: "center" }}
        >
          INDIA
        </h1>
      </div>
      <div className="services">
        <div className="pt-5"></div>
        <div className={`container-fluid`}>
          <div
            className={`container service-container `}
          // style={{ backgroundColor: `${bgcolor}` }}
          >
            <div className="service-text">
              <div className="border-start border-5 border-primary ps-5 mb-3">
                {/* <h6 className="text-primary text-uppercase">About Us</h6> */}
                <h1 className="display-5 text-uppercase mb-0">
                  "Tennis Academy's in INDIA"
                </h1>
              </div>
              <p>
                Thirt40 offers an exceptional environment for aspiring tennis players to hone their skills and achieve their full potential. Equipped with state-of-the-art facilities, Our academy provide comprehensive training programs that include on-court practice, fitness conditioning, mental coaching, and nutritional guidance. With experienced coaches and a structured curriculum, students receive personalized attention to improve their technique, strategy, and overall performance. In addition to regular training sessions, players have the opportunity to compete in local, national, and international tournaments
              </p>
              <h2>Features</h2>
              <ul>
                <li>
                  The academy offers personalized coaching tailored to each player's needs, from beginners to aspiring professionals.
                </li>
                <li>
                  The academy offers sports psychotherapy, nutrition counseling, and fitness training, ensuring a holistic approach to player development.
                </li>
                <li>
                  The coaches include former ATP and WTA players with extensive experience in the sport.
                </li>
                <li>
                  Overall, With centers in Delhi, Gurugram, Muzaffarnagar, and Spain, the academy provides top-notch facilities to train, practice, and compete.
                </li>

              </ul>
            </div>
            <div className="service-img">
              <img src={img4} />
            </div>
          </div>
        </div>
      </div>
      <OurCenter />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default India;
