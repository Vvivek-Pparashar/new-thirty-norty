import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
// import './V6.css'
import V6services from "./V6services";

const V5 = () => {
  const style = {
    paddingBlock: "20px",
    textAlign: "center",
  }
  return (
    <>
      <NavBar />
      <div
        className={"USA container-fluid bg-primary mb-5 SH1"}
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
          Carrer Counselling
        </h2>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Why choose,</h6>
            <h1 className="display-5 text-uppercase mb-0">Thirty40</h1>
          </div>
          <div class="row py-2">
            <div class="col-lg-6" >
              <h2>We are based in</h2>
              <h3>India, Germany, Czech Republic, Spain, USA, Italy, Canada and France</h3>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Our Mission at Thirty40 is to enable every player to:

              </p>
              <ul>
                <li><i class="ri-check-double-line"></i> Make the process of becoming a tennis professional easier and simpler.</li>
                <li><i class="ri-check-double-line"></i> Provide cost-effective ways for players to train abroad and play international tournaments and leagues. </li>
                <li><i class="ri-check-double-line"></i> Initially train the players at our academies in India and then send them abroad on scholarships and arrange sponsorships. </li>
                <li><i class="ri-check-double-line"></i> Players going to tennis academies can continue their education by studying on scholarships in public and private universities abroad. </li>
              </ul>

            </div>
          </div>
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">An overview to,</h6>
            <h1 className="display-5 text-uppercase mb-0">OUR SERVICES</h1>
          </div>
          <section id="services" className="pb-5" >
            <V6services />
          </section>

          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">A Sight To,</h6>
            <h1 className="display-5 text-uppercase mb-0">Our Mission</h1>
          </div>

          <section id="mission" class="about-us">
            <div class="container " >

              <div class=" content">

                <div class=" pt-4 pt-lg-0">

                  <ul>
                    <li><i class="ri-check-double-line"></i> To strengthen the tennis culture in India and facilitate it to emerge into a tennis-playing nation.   </li> <br />
                    <li><i class="ri-check-double-line"></i> Our aim is to detangle the process taken in the career path for those who aspire to become tennis professionals and make it easier and simpler.  </li> <br />
                    <li><i class="ri-check-double-line"></i> Training abroad and playing international tournaments are important milestones for any tennis professional but can be a very expensive affair. We strive to make the process inclusive by mapping cost-effective ways to achieve the milestones.  </li> <br />
                    <li><i class="ri-check-double-line"></i> Our motive is to fetch the best out of every player. They should get the best place to train, practice, perform and move forward towards their dreams in terms of playing internationally.  </li><br />
                    <li><i class="ri-check-double-line"></i> To educate and guide student-athletes & their families through the athletic college recruitment process, create tailor-made solutions, and connect them to the right colleges & teams, while taking into account scholarship requirements.  </li>
                  </ul>

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      <FloatingWhatsApp />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default V5;