import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SpecialOffer from "../MainPage/SpecialOffer";
import Owner from "../MainPage/Owner";
import Footer from "../Footer/Footer";
import About from "../MainPage/About";

const AboutUs = () => {
  return (
    <div>
      <NavBar page={"AboutUs"} />
      <div className="p-5"></div>
      <About page={1} />
      <Owner />
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  );
};

export default AboutUs;
