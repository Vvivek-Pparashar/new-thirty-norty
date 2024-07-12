import React from 'react'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import EnquireNowPage from './EnquireNowPage'
import NavBar from '../NavBar/NavBar'

const EnquireNow = () => {
  return (
    <div>
        <NavBar page={"EnquireNow"}/>
        <div className='pt-5' ></div>
        <EnquireNowPage/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default EnquireNow