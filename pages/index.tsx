import React,{useState} from "react"
import { GetStaticProps } from "next";

import store from "../Redux/store";
import {createUpdateAll} from "../Redux/Actions"


import styles from '@/styles/Index.module.scss';


import {
  LogoSection,
  Header,
  Navigation,
  About,
  Experience,
  Projects,
  ContactForm,
  Skills} from "../components/LandingPageComponents"
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
  skills:
    {
      name:string,
      image:string
    }[]

}

const Home = ({list,experience,nodes,skills}:Props) => {
  useState(store.dispatch(createUpdateAll(list,experience,nodes,skills)))
  

  return(
    
    <div className="h-screen snap-y snap-mandatory z-0" id={styles.main}>
        <Title pageTitle="Portfolio"/>
        

        <div className="z-1 snap-start">
          <Header />
          <Navigation/>
        </div>

        <div>
          <LogoSection/>
        </div>

        <div className="space-y-40" id={styles.text_section}>


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
        
          
        </div>
        <footer className="pt-2 pb-2">
          <Navigation/>
        </footer>

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
  const skills = await fetchData(process.env.API_URL+"/Skills");

  store.dispatch(createUpdateAll(list,experience,nodes,skills))

  return {
      props: {
          list,
          experience,
          nodes,
          skills
      },

      revalidate: 21600
  }
}

