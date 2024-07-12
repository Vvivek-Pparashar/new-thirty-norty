import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import About from '../MainPage/About'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import OurCenter from '../MainPage/OurCenter'
import V1Services from './V1Services'
import YouTube from '../MainPage/Youtube'
import Instagram from '../MainPage/Instagram'
import Owner from '../MainPage/Owner'

const V1 = () => {
  return (
    <>
      <NavBar page={"Tennis Academies"} />
      <div className='p-5'></div>
      {/* <About/> */}
      <V1Services />
      <OurCenter />
      <YouTube />
      <Instagram />
      <Owner />
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </>
  )
}

export default V1