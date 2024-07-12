import React from "react";
import ServicesComp from "./ServicesComp";

const list = [
  { id: 1, name: "Join Our Academy" },
  { id: 2, name: "Register For Tennis & Education" },
  { id: 3, name: "Scholarship in USA & Europe" },
  { id: 4, name: "Tennis Camp in Spain" },
  { id: 5, name: "Career Counseling" },
  { id: 6, name: "Book a course" },
];

const Services = () => {
  return (
    <div id="2" className="container-fluid py-5">
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
        <div className="row" style={{ rowGap: "30px" }}>
          {list.map((e) => (
            <ServicesComp id={e.id} name={e.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
