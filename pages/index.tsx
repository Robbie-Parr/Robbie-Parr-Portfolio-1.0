import React from "react"
import Head from 'next/head';

import styles from '@/styles/Index.module.scss';


import {Header,About,Experience,Projects,ContactForm,Skills} from "../components/LandingPageComponents"
import Title from "../components/Title";

const Home = () => {
  return(
    <div className="h-screen snap-y snap-mandatory z-0" id={styles.main}>
        <Title pageTitle="Portfolio"/>
        

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

          <section className="snap-start" id="skills">
            <Skills/>
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