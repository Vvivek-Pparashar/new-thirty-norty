import React from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";

import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import EnquirePageForm from "./EnquirePageForm";
import NavBar from "../NavBar/NavBar";
import Floating from "../FloatingWhatsapp/Floating";

const PlaceEnquire = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const place = currentUrl.split("/");

  //   place = place[2].toLowerCase()

  return (
    <div>
      <NavBar page={"V2"}/>
      <EnquirePageForm />
      <Footer />
      <Floating />
      <ScrollRestoration />
    </div>
  );
};

export default PlaceEnquire;
