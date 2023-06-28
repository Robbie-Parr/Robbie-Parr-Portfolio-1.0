import React from "react"
import {useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";

import styles from '@/styles/Projects.module.scss';

import {ProjectPageComponents,ProjectSection} from "../../components/ProjectPageComponents"
import Title from "../../components/Title";

const ProjectPage = () => {
  const [nodes,setNodes] = useState([{
    id:"",
    data:{
            links:[""],
            text_sections:[],
            skills:[],
            project_status:"",
            start_end_dates:"",
            image_links:[],
            overview:""
        }
    }])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("../../../../api/Projects",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            }
        })
        if(response.status !==404){
            const responsejson = await (response).json()
            setNodes(responsejson.data)
        }}
    fetchData();
    },[]);

  return(
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
          <ProjectSection/>
        </section>
      </div>
    </>
  )
  
}

export default ProjectPage;