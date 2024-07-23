import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import Services from "../MainPage/Services";
import Floating from "../FloatingWhatsapp/Floating";

const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <div className="p-5"></div>
      <Services />
      <Footer />
      <ScrollRestoration />
      <Floating />
    </>
  );
};

export default ServicesPage;
