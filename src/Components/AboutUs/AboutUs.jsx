import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SpecialOffer from "../MainPage/SpecialOffer";
import Owner from "../MainPage/Owner";
import Footer from "../Footer/Footer";
import About from "../MainPage/About";
import OurUni from "../MainPage/OurUni";
import AllUni from "../MainPage/AllUni";

const AboutUs = () => {
  return (
    <div>
      <NavBar page={"AboutUs"} />
      <div className="p-5"></div>
      <About page={1} />
      <AllUni />
      <Owner />
      <div className="container">
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
      <div className="pb-5"></div>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  );
};

export default AboutUs;
