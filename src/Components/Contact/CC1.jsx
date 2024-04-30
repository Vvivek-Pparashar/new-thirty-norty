import React from "react";

const CC1 = () => {
  return (
    <div className="pt-5">
      <div className="container-fluid pt-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Contact Us</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Please Feel Free To Contact Us
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
              <div className="bg-light mb-5 p-5">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Our Office</h6>
                    <span>123 Street, New York, USA</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Call Us</h6>
                    <span>+012 345 6789</span>
                  </div>
                </div>
                <div>
                  <iframe
                    className="position-relative w-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameborder="0"
                    style={{ height: 205 + "px", border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CC1;
