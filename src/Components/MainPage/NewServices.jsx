import React from "react";
import sn1 from "../../../public/img/Hero.jpg";
import { Link } from "react-router-dom";

const NewServices = ({page}) => {
  return (
    <div
      className="col-lg-6"
      //   style={{ background: "blue" }}
    >
      <div
        className="service-item bg-light d-flex shadow-effect-services"
        style={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <img src={sn1} style={{ width: "100%" }} />
        <Link to={`/services/v${page}`} className="bg-primary text-white p-3" style={{width:"100%", fontSize:"18px"}}>
          Learn More <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default NewServices;
