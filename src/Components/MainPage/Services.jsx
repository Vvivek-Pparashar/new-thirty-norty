import React from "react";
import NewServices from "./NewServices";

const list = [
  { id: 1, name: "PROFESSIONAL COACHING" },
  { id: 2, name: "RECREATIONAL COACHING" },
  { id: 3, name: "TENNIS CAMP IN EUROPE" },
  { id: 4, name: "CAREER COUNSELING" },
];

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
          {list.map((e) => (
            <NewServices id={e.id} name={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
