import React from "react";
import NewServices from "./NewServices";

const Services = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div
          className="border-start border-5 border-primary ps-5 mb-5"
          style={{ maxWidth: 600 + "px" }}
        >
          <h6 className="text-primary text-uppercase">Services</h6>
          <h1 className="display-5 text-uppercase mb-0">
            Our Excellent Tennis Services
          </h1>
        </div>
        <div className="row g-5">
        {[1, 2, 3, 4].map((e)=><NewServices page={e}/>)}
        </div>
      </div>
    </div>
  );
};

export default Services;
