import React from "react";
import Footer from "../Footer/Footer";
import CC1 from "./CC1";
import { ScrollRestoration } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Floating from "../FloatingWhatsapp/Floating";

const ContactUs = () => {
  return (
    <div>
      <NavBar page={"contact"} />
      <div className="p-3"></div>
      <CC1 />
      <Footer />
      <Floating/>
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
