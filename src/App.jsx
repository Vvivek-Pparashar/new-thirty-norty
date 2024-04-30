import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroPage from "./Components/MainPage/HeroPage";
import Services from "./Components/MainPage/Services";
import Footer from "./Components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const App = () => {
  return (
    <>
      <NavBar page={"Home"} />
      <HeroPage />
      <Services />
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </>
  );
};

export default App;
