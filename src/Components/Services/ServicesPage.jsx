import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import Services from '../MainPage/Services'

const ServicesPage = () => {
  return (
    <>
        <NavBar/>
        <div className='p-5'></div>
        <Services/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </>
  )
}

export default ServicesPage