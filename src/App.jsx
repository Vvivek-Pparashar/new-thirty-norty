import React, { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/MainPage/Services";
import Testimonial from "./Components/MainPage/Testimonial";
import SpecialOffer from "./Components/MainPage/SpecialOffer";
import Owner from "./Components/MainPage/Owner";
import LatestBlogs from "./Components/MainPage/LatestBlogs";
import OurCenter from "./Components/MainPage/OurCenter";
import Model from "./Components/Model/Model";
import HeroPage from "./Components/MainPage/HeroPage";
import News from "./Components/MainPage/News";
import Youtube from "./Components/MainPage/Youtube";
import Instagram from "./Components/MainPage/Instagram";
import OurUni from "./Components/MainPage/OurUni";

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
      <Services />
      <OurCenter />
      <OurUni />
      <div className="pb-5"></div>
      <SpecialOffer />
      <Testimonial />
      <News />
      {/* <LatestBlogs /> */}
      <Youtube />
      <Instagram />
      <Owner />
      <Footer />
      <ScrollRestoration />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
