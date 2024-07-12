import React from 'react'

import Grid1 from './Grid1'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const BlogGrid = () => {
  return (
    <div>
        <NavBar page={"Blog"}/>
        <Grid1/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default BlogGrid