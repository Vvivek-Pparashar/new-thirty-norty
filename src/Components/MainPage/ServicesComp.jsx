import React from "react";
import sn1 from "../../../public/img/SH1.jpg";
import sn2 from "../../../public/img/t7.jpg";
import sn3 from "../../../public/img/SH3.jpg";
import sn4 from "../../../public/img/t5.jpg";
import sn5 from "../../../public/img/SH5.jpg";
import sn6 from "../../../public/img/SH6.jpg";
import "./ServicesComp.css";

import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const list = ["", sn1, sn2, sn3, sn4, sn5, sn6];

const ServicesComp = ({ id, name }) => {
  return (
    <div className="col-lg-6">
      <div
        className="service-item bg-light d-flex shadow-effect-services services-hover"
        style={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <img src={list[id]} className="services-img"
          style={{
            maxHeight: "270px",
          }}
        />
        <h3
          style={{
            fontSize: "25px",
            position: "absolute",
            bottom: 50,
            color: "white",
            paddingTop: "20px",
            fontWeight: "200",
            textTransform: "uppercase",
          }}
        >
          {name}
        </h3>
        <Link to={`/services/v${id}`} className="text-white services-btn">
          Learn More
          <ArrowRightAltIcon fontSize="medium" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesComp;
