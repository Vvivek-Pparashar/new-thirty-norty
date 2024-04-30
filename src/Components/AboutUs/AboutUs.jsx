import React from 'react'
import About from '../MainPage/AboutUs'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import SpecialOffer from '../MainPage/SpecialOffer'
import TeamMember from '../MainPage/TeamMember'
import NavBar from '../NavBar/NavBar'

const AboutUs = () => {
  return (
    <div>
        <NavBar page={"AboutUs"}/>
        <About/>
        <SpecialOffer/>
        <TeamMember/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default AboutUs