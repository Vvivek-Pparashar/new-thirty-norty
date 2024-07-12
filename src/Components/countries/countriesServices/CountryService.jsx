import React from "react";
import "./CountryService.css";

const CountryService = ({ direction, serviceHeading, bgcolor, serviceIMG }) => {
  let path = 2;

  return (
    <>
      <div className={`container-fluid ${direction == 2 ? "vivek" : ""}`}>
        <div
          className={`container service-container ${direction == 2 ? "reverse" : " "
            }`}
        // style={{ backgroundColor: `${bgcolor}` }}
        >
          <div className="service-text">
            <div className="border-start border-5 border-primary ps-5 mb-3">
              {/* <h6 className="text-primary text-uppercase">About Us</h6> */}
              <h1 className="display-5 text-uppercase mb-0">
                {serviceHeading}
              </h1>
            </div>
            <p>
              US colleges offer a chance to continue your tennis journey while pursuing a degree. You'll participate in a full-time training program with on-court drills, gym sessions, strength & conditioning, and recovery alongside competing against other colleges and individual tournaments. The Intercollegiate Tennis Association (ITA) governs college tennis in the US, overseeing men's and women's teams across various divisions: NCAA (Divisions I, II, III), NAIA, and Junior/Community Colleges .
            </p>
            <h2>Features</h2>
            <ul>
              <li>
                Many colleges offer athletic scholarships to help cover the costs of education.
              </li>
              <li>
                The United States Tennis Association (USTA) offers a wealth of information on college tennis, including choosing a program, recruiting tips, and frequently asked questions
              </li>
              <li>
                Proactively reach out to coaches and showcase your skills during your junior tennis years.
              </li>
              <li>
                Overall, US college tennis provides a well-rounded experience for athletes to develop their game, receive an education, and potentially compete at a high level.
              </li>

            </ul>
          </div>
          <div className="service-img">
            <img src={serviceIMG} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryService;
