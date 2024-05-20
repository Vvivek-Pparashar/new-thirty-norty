import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import Testimonial from '../MainPage/Testimonial'
import SpecialOffer from '../MainPage/SpecialOffer'
import Owner from '../MainPage/Owner'
import Pricing from './Pricing/Pricing1'
// import AboutUs from '../AboutUs/AboutUs'
import About from '../MainPage/About'
import CC1 from '../Contact/CC1'
import ServicesHero from './ServicesHero'

const ServicesHomePage = () => {
  return (
    <>
        <NavBar/>
        <ServicesHero/>
        <About/>
        <Pricing/>
        {/* <SpecialOffer/> */}
        <Testimonial/>
        <Owner/>
        <CC1/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </>
  )
}

export default ServicesHomePage