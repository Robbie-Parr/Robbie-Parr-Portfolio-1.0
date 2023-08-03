import React from "react"
import Head from 'next/head';
import { GetStaticProps } from "next";

import styles from '@/styles/Index.module.scss';


import {Header,About,Experience,Projects,ContactForm} from "../components/LandingPageComponents"
import Title from "../components/Title";

type Props = {
  list:{
      images:string[],
      text:string[]
  },
  experience:
    {
      id:string, 
      data:{
        description:string,
        job_title:string,
        start_end_date:string,
        key_takeaways:string[],
        references:string[]
      }
    }[],
  nodes:
    {
      id:string,
      data:{
        links:string[],
        text_sections:string[],
        skills:string[],
        project_status:string,
        start_end_dates:string,
        image_links:string[],
        overview:string
      }
    }[],
}

const Home = ({list,experience,nodes}:Props) => {
  return(
    <div className="h-screen snap-y snap-mandatory z-0" id={styles.main}>
        <Title pageTitle="Portfolio"/>
        

        <div className="z-1 snap-start">
          <Header />
        </div>


        <div className="space-y-40" id={styles.text_section}>
          {/* todo: <Link href="#contact-form">Tp Contact Form</Link> */}

          <section className="snap-start" id="about">
            <About list={list}/>
          </section>

          <section className="snap-start" id="experience">
            <Experience experience={experience}/>
          </section>
        
          <section className="snap-start" id="projects-section">
            <Projects nodes={nodes}/>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fetchData = async (url:string) => {
      const response = await fetch(url,{
          method:"GET",
          headers:{
              "Content-Type":"application/json",
          }
      })
      if(response.status !==404){
          const responsejson = await (response).json()
          return responsejson.data
      }}

  const list = await fetchData(process.env.API_URL+"/About");
  const experience = await fetchData(process.env.API_URL+"/ExperienceCarousel");
  const nodes = await fetchData(process.env.API_URL+"/Projects");


  return {
      props: {
          list,
          experience,
          nodes
      },

      revalidate: 21600
  }
}