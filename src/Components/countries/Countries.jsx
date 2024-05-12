import React from "react";
import "./Countries.css";
import NavBar from "../NavBar/NavBar";
import img1 from "../../../public/img/hero5.jpg";
import img2 from "../../../public/img/SH2.jpg";
import img3 from "../../../public/img/offer.jpg";
import img4 from "../../../public/img/vivek1.png";
import img5 from "../../../public/img/vivek2.png";
import img6 from "../../../public/img/vivek3.png";
import Footer from "../Footer/Footer";
import CountryService from "./countriesServices/CountryService";

const Countries = () => {
  return (
    <>
      <NavBar page={"India"} />
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
          India
        </h1>
      </div>
      <div className="services">
        <CountryService
          direction={1}
          bgcolor={"white"}
          serviceIMG={img4}
          serviceHeading={"Admission in Schools and Colleges."}
        />
        <CountryService
          direction={2}
          bgcolor={"white"}
          serviceIMG={img5}
          serviceHeading={"Admission in Schools and Colleges."}
        />
        <CountryService
          direction={1}
          bgcolor={"white"}
          serviceIMG={img6}
          serviceHeading={"Admission in Schools and Colleges."}
        />
      </div>
      <Footer />
    </>
  );
};

export default Countries;
