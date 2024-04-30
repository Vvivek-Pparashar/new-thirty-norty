import React from "react";
import sn1 from "../../../public/img/SH1.jpg";
import sn2 from "../../../public/img/SH2.jpg";
import sn3 from "../../../public/img/SH3.jpg";
import sn4 from "../../../public/img/SH4.jpg";

import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const list  = ["", sn1, sn2, sn3, sn4];

const NewServices = ({ id, name }) => {
  return (
    <div className="col-lg-6">
      <div
        className="service-item bg-light d-flex shadow-effect-services"
        style={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img src={list[id]} style={{ width: "100%" }} />
        <h1 style={{position:"absolute", bottom: 70,  color:"white", paddingTop:"20px"}}>{name}</h1>
        <Link
          to={`/services/v${id}`}
          className="bg-primary text-white p-3"
          style={{ width: "100%", fontSize: "20px", fontWeight: "500" }}
        >
          Learn More
          <ArrowRightAltIcon fontSize="medium" />
        </Link>
      </div>
    </div>
  );
};

export default NewServices;
