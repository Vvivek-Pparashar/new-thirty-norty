import React, { useState } from "react";
import "./Services.css";
import { useLocation } from "react-router-dom";

const list = [
  "",
  "professional coaching",
  "Recreational Coaching",
  "Tennis Camp in Europe",
  "career counseling",
];

const ServicesHero = () => {
  let location = useLocation();
  location = location.pathname.split("/");
  location = location[2];

  console.log(location[1]);
  return (
    <div
      className={`container-fluid bg-primary mb-5 SH${location[1]}`}
      style={{
        paddingInline: "100px",
        paddingTop: "295px",
        paddingBottom: "200px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <h1
        className="display-4 text-uppercase mb-lg-4"
        style={{ color: "white", textAlign: "center" }}
      >
        {list[location[1]]}
      </h1>
    </div>
  );
};

export default ServicesHero;
