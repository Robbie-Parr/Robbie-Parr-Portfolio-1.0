import React from "react"
import {useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { GetStaticProps } from "next";

import styles from '@/styles/Projects.module.scss';

import {ProjectPageComponents,ProjectSection} from "../../components/ProjectPageComponents"
import Title from "../../components/Title";

type Props = {
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

const ProjectPage = ({nodes}:Props) => {
  const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])

  return(
    <> {hydrated && 
      <>
      <Title pageTitle="Projects"/>
      
      <div className="text-center" id={styles.root}>
        <div id={styles.header}>
          <div className="flex" style={{backgroundImage:"url(/TextureBackground01.png)"}}>
            <div>
              <a href="./" className="">
                <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
              </a>
            </div>
            <div/>
          </div>
          
          <div>
            <h1 className="m-4 p-2">Projects</h1>
          </div>
        </div>
        

        {/* todo: This part of my page still needs to be finished/refined.*/}
        <h4>This page is in development</h4>
        <section id="projects-section">
          <ProjectSection nodes={nodes}/>
        </section>
      </div>
     </>}</>
  )
  
}

export default ProjectPage;

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
  const nodes = await fetchData(process.env.API_URL+"/Projects");


  return {
      props: {
          nodes
      },

      revalidate: 21600
  }
}