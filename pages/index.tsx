import React from "react"

import styles from '@/styles/Index.module.scss';

import {Header,About,Experience,Projects,ContactForm} from "../components/LandingPageComponents"

const Home = () => {
  return(
    <div className="h-full" id={styles.main}>

        {/* Header section*/}
        <Header/>

        <div className="space-y-40" id={styles.text_section}>

          {/* About section */}
          <About/>

          {/* Experience section */}
          <Experience/>
        
          {/* Projects section */}
          <Projects/>

          {/* Contact Form section */}
          <ContactForm/>
        
          <footer/>
        </div>

    </div>
  )
  
}

export default Home;