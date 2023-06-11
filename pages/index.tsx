import React from "react"

import styles from '@/styles/Index.module.scss';

import {Header,About,Experience,Projects,ContactForm} from "../components/LandingPageComponents"
import Link from "next/link";

const Home = () => {
  return(
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0" id={styles.main}>

        {/* Header section*/}
        <div className="z-1 snap-start">
          <Header />
        </div>

        <div className="space-y-40" id={styles.text_section}>

          {/* <Link href="#contact-form">Tp Contact Form</Link> */}

          {/* About section */}
          <section className="snap-start h-screen" id="about">{/* href="#about" */}
            <About/>
          </section>

          {/* Experience section */}
          <section className="snap-center h-screen" id="experience">
            <Experience/>
          </section>
        
          {/* Projects section */}
          <section className="snap-center h-screen" id="projects-section">
            <Projects/>
          </section>

          {/* Contact Form section */}
          <section className="snap-center h-screen" id="contact-form">
            <ContactForm/>
          </section>
        
          <footer/>
        </div>

    </div>
  )
  
}

export default Home;