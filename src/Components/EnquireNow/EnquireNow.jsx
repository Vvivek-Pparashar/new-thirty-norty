import React from 'react'
import Footer from '../Footer/Footer'
import { ScrollRestoration } from 'react-router-dom'
import EnquireNowPage from './EnquireNowPage'
import NavBar from '../NavBar/NavBar'
import Floating from '../FloatingWhatsapp/Floating'

const EnquireNow = () => {
  return (
    <div>
        <NavBar page={"EnquireNow"}/>
        <div className='pt-5' ></div>
        <EnquireNowPage/>
        <Footer/>
        <Floating/>
        <ScrollRestoration/>
    </div>
  )
}

export default EnquireNow