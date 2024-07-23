import React from "react";
import "./Countries.css";
import NavBar from "../NavBar/NavBar";
import img5 from "../../../public/img/vivek5.png";
import Footer from "../Footer/Footer";
import CountryService from "./countriesServices/CountryService";
import { ScrollRestoration } from "react-router-dom";
import Floating from "../FloatingWhatsapp/Floating";

const Countries = () => {
  return (
    <>
      <NavBar page={"Global"} />
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
          GLOBAL
        </h1>
      </div>
      <div className="services">
        {/* <CountryService
          direction={1}
        //   bgcolor={"white"}
          serviceIMG={img6}
          serviceHeading={"Admission in Schools and Colleges."}
        /> */}
        <CountryService
          direction={2}
          //   bgcolor={"#7ab730"}
          serviceIMG={img5}
          serviceHeading={"Admission in Schools and Colleges."}
        />
        {/* <CountryService
          direction={1}
        //   bgcolor={"white"}
          serviceIMG={img4}
          serviceHeading={"Admission in Schools and Colleges."}
        /> */}
      </div>
      <Footer />
      <Floating />
      <ScrollRestoration />
    </>
  );
};

export default Countries;
