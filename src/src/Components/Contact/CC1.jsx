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
                    <span>FN-5, 3 F, HVR, Ward 8, Mehrauli, 110030, New Delhi, India</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Email Us</h6>
                    <span>info@thirty40.in</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h6 className="text-uppercase mb-1">Call Us</h6>
                    <span>+91-7892650335</span>
                  </div>
                </div>
                <div>
                  <iframe
                    className="position-relative w-100"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1752.8619051839883!2d77.17832563844661!3d28.517956200704088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFN-5%2C%203%20F%2C%20HVR%2C%20Ward%208%2C%20Mehrauli%2C%20110030%2C%20New%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1720288712876!5m2!1sen!2sin"
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
    </div >
  );
};

export default CC1;
