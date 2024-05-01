import React from "react";
import NavBar from "../NavBar/NavBar";
import About from '../MainPage/AboutUs'
import Testimonial from "../MainPage/Testimonial"
import CC1 from "../Contact/CC1";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration, useLocation } from "react-router-dom";
import Pricing1 from "../Pricing/Pricing1";
import ServicesHero from "./ServicesHero";

const Services = () => {
  let location = useLocation();
  location = location.pathname.split("/");
  location = location[2];
  return (
    <>
      <NavBar />
      <ServicesHero/>
      <About page={location[1]}/>
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
