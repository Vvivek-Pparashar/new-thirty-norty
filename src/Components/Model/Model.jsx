import React, { useState } from "react";
import { Button, Modal } from "antd";
const Model = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const HandleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        centered={true}
        onCancel={handleCancel}
        style={{ zIndex: 10000, width: "90%" }}
        width={1000}
        zIndex={10000}
        okButtonProps={{
          disabled: true,
          style: { display: "none" },
        }}
        cancelButtonProps={{
          disabled: true,
          style: { display: "none" },
        }}
      >
        <div className="">
          <div className="pt-5">
            <div className="container">
              <div
                className="border-start border-5 border-primary ps-5 mb-5"
                style={{ maxWidth: 600 + "px" }}
              >
                {/* <h6 className="text-primary text-uppercase">Contact Us</h6> */}
                <h1 className="display-5 text-uppercase mb-0">
                  Please Feel Free To Contact Us
                </h1>
              </div>
              <div className="row g-5">
                <div className="col-lg-12">
                  <form>
                    <div className="row g-3">
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Your Name"
                          required
                          style={{ height: 55 + "px" }}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="tel"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Phone No."
                          required
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
                          type="number"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Age"
                          style={{ height: 55 + "px" }}
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control bg-light border-0 px-4"
                          placeholder="Location"
                          style={{ height: 55 + "px", marginBottom: 50 + "px" }}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          onClick={(e) => HandleClick(e)}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Model;
