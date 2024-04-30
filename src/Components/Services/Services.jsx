import React from "react";
import NavBar from "../NavBar/NavBar";
import About from '../MainPage/AboutUs'
import Testimonial from "../MainPage/Testimonial"
import CC1 from "../Contact/CC1";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";
import Pricing1 from "../Pricing/Pricing1";
import ServicesHero from "./ServicesHero";

const Services = () => {
  return (
    <>
      <NavBar />
      <ServicesHero/>
      <About/>
      <Pricing1/>
      <Testimonial/>
      <CC1/>
      <Footer/>
      <FloatingWhatsApp/>
      <ScrollRestoration/>
    </>
  );
};

export default Services;
