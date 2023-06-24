import React from "react"

import styles from '@/styles/Index.module.scss';

import {Header,About,Experience,Projects,ContactForm} from "../components/LandingPageComponents"
import Link from "next/link";

const Home = () => {
  return(
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0" id={styles.main}>

        <div className="z-1 snap-start">
          <Header />
        </div>


        <div className="space-y-40" id={styles.text_section}>
          {/* todo: <Link href="#contact-form">Tp Contact Form</Link> */}

          <section className="snap-start" id="about">
            <About/>
          </section>

          <section className="snap-start" id="experience">
            <Experience/>
          </section>
        
          <section className="snap-start" id="projects-section">
            <Projects/>
          </section>

          <section className="snap-start" id="contact-form">
            <ContactForm/>
          </section>
        
          <footer/>
        </div>

    </div>
  )
  
}

export default Home;