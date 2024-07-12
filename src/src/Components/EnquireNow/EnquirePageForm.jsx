import React from "react";
import sn3 from "../../../public/img/spain.jpeg";

const EnquirePageForm = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <div className="container-fluid pt-5">
          <div className="container">
            <div
              className="border-start border-5 border-primary ps-5 mb-5"
              style={{ maxWidth: 600 + "px" }}
            >
              <h6 className="text-primary text-uppercase">Enquire</h6>
              <h1 className="display-5 text-uppercase mb-0">
                Please Feel Free To Enquire
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-lg-7">
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Name"
                        style={{ height: 55 + "px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Your Email"
                        style={{ height: 55 + "px" }}
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0 px-4"
                        placeholder="Subject"
                        style={{ height: 55 + "px" }}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0 px-4 py-3"
                        rows="8"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5">
                <img
                  src={sn3}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquirePageForm;
