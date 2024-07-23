import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/MainPage/Services";
import Testimonial from "./Components/MainPage/Testimonial";
import SpecialOffer from "./Components/MainPage/SpecialOffer";
import Owner from "./Components/MainPage/Owner";
import OurCenter from "./Components/MainPage/OurCenter";
import Model from "./Components/Model/Model";
import HeroPage from "./Components/MainPage/HeroPage";
import News from "./Components/MainPage/News";
import Youtube from "./Components/MainPage/Youtube";
import Instagram from "./Components/MainPage/Instagram";
import OurUni from "./Components/MainPage/OurUni";
import Floating from "./Components/FloatingWhatsapp/Floating";
import About from "./Components/MainPage/About";

const App = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2000);
  });
  return (
    <>
      {display ? <Model /> : ""}
      <NavBar />
      <HeroPage />
      <About/>
      <Services />
      <OurCenter />
      <OurUni />
      <div className="pb-5"></div>
      <SpecialOffer />
      <Testimonial />
      <News />
      <Youtube />
      <Instagram />
      <Owner />
      <Footer />
      <ScrollRestoration />
      <Floating />
    </>
  );
};

export default App;
