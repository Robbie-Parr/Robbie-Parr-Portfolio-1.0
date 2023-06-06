import React from "react"

import {Header,About,Experience,Projects,ContactForm} from "../components/LandingPageComponents"

const Home = () => {
  return(
    <>
        {/* Header section*/}
        <Header/>

        {/* About section */}
        <About/>

        {/* Experience section */}
        <Experience/>
        
        {/* Projects section */}
        <Projects/>

        {/* Contact Form section */}
        <ContactForm/>
    </>
  )
  
}

export default Home;