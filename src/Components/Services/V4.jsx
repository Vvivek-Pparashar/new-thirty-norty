import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import "./Services.css";

const V4 = () => {
  return (
    <>
      <NavBar />
      <div
        className={"headtext container-fluid bg-primary mb-5 SH1"}
        style={{
          // paddingInline: "100px",
          paddingTop: "295px",
          paddingBottom: "200px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h2
          className="display-4 text-uppercase mb-lg-4"
          style={{ color: "white", textAlign: "center" }}
        >
          SPAIN
        </h2>
      </div>
      <div className="container-fluid ">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Why choose,</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Tennis Camp In SPAIN
            </h1>
          </div>
          <div className="spain-feature">
            <div style={{ paddingBlock: "20px", textAlign: "center" }}>
              <h2>Clay Court Expertise</h2>
              <p style={{ paddingTop: "10px" }}>
                Spain is renowned for its red clay courts, the surface used in
                the French Open. Training on clay demands different skills than
                hard courts, focusing on control, strategy, and finesse. This
                can significantly improve your overall game.
              </p>
            </div>
          </div>
          <div className="spain-feature">
            <div style={{ paddingBlock: "20px", textAlign: "center" }}>
              <h2>Top-Tier Coaching</h2>
              <p>
                Spain boasts a rich tennis tradition, with numerous academies
                staffed by experienced and qualified coaches. Many have trained
                champions themselves and can provide invaluable guidance to
                aspiring players.
              </p>
            </div>
          </div>
          <div className="spain-feature">
            <div style={{ paddingBlock: "20px", textAlign: "center" }}>
              <h2>Competitive Environment</h2>
              <p>
                Spain is a hub for tennis talent. Training there puts you in a
                competitive environment, allowing you to test your skills
                against other strong players and constantly push yourself to
                improve. You might even rub shoulders with professional players
                who train at the same academies.
              </p>
            </div>
          </div>
          <div className="spain-feature">
            <div style={{ paddingBlock: "20px", textAlign: "center" }}>
              <h2>Year-Round Training</h2>
              <p>
                Spain's warm climate allows for year-round outdoor training,
                which is a significant advantage compared to regions with
                limited playing seasons.
              </p>
            </div>
          </div>
          <div className="spain-feature">
            <div style={{ paddingBlock: "20px", textAlign: "center" }}>
              <h2>Immersive Experience</h2>
              <p>
                Training in Spain goes beyond the court. You'll be surrounded by
                a passionate tennis culture and can soak up the beautiful
                Spanish scenery and culture, making it a truly enriching
                experience. Some academies even offer Spanish language classes
                alongside your training.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FloatingWhatsApp />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default V4;
