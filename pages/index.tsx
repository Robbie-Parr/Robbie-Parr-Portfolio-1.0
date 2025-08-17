import React ,{useState}from "react"
import { GetStaticProps } from "next";

import { Provider } from "react-redux";
import store from "../Redux/store";
import {createUpdateAll} from "../Redux/Actions"

import {
  LogoSection,
  Header,
  Navigation,
  About,
  Skills
} from "../components/LandingPageComponents"
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
    <Provider store={store}>
    <div className="h-screen snap-y snap-mandatory z-0" id="main">
        <Title pageTitle="Portfolio"/>
        

        <div className="z-1 snap-start">
          <Header />
          <Navigation/>
        </div>

        <div>
          <LogoSection/>
        </div>

        <div className="space-y-40" id="text_section">


          <div className="outofDateWarning">
            <h1>This site's code has not been updated in <span>2 years</span> and is subsequently <span>out of date</span></h1>
            <p id="outofDateWarning_subtext">There will not be updates on this page for a long while.<br/><br/>For up to date information, please find my LinkedIn Profile which is linked above</p>
          </div>

      

          {/*
          <section className="snap-start" id="experience">
            <Experience/>
          </section>
          */}

          <section className="snap-start" id="skills">
            <Skills/>
          </section>

          {/*<section className="snap-start" id="about">
            <About/>
          </section>*/}
        {/*
          <section className="snap-start" id="projects-section">
            <Projects/>
          </section>*/}

         {/*
         <section className="snap-start" id="contact-form">
            <ContactForm/>
          </section>
          */}
        
          
        </div>
        {/*<footer className="pt-2 pb-2">
          {<Navigation/>}
        </footer>*/}

    </div>
    </Provider>
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

