import React from "react";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-offer py-5"
        style={{ backgroundAttachment: "fixed" }}
      >
        <div className="container py-5">
          <div className="row gx-5 justify-content-start">
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                {/* <h6 className="text-dark text-uppercase">Hurry-up</h6> */}
                <h1 className="display-5 text-uppercase text-white mb-0">
                  LIMITED SLOTS AVAILABLE HURRY UP!
                </h1>
              </div>
              {/* <p className="text-white mb-4">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </p> */}
              <Link to="#" className="btn btn-light py-md-3 px-md-5 me-3">
                Enquire Now
              </Link>
              {/* <Link to="#" className="btn btn-outline-light py-md-3 px-md-5">
                Read More
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
