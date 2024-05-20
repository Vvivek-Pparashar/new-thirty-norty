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
  return (
    <div
      className={`container-fluid bg-primary mb-5 SH1`}
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
        {list[1]}
      </h1>
    </div>
  );
};

export default ServicesHero;
