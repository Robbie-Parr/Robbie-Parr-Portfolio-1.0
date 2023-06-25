import React from "react"
import {useEffect, useState } from "react";

import ProjectPageComponents from "../../components/ProjectPageComponents"
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
      
      <div className="text-center bg-white">
            <h1>The Project Page, where I show off my projects is not ready yet...</h1>
            <h2>Come back later to look at my Projects</h2>
            <h4>This page is in development</h4>
            <a href="./">
                <h2>{"<- Back"}</h2>
            </a>
        </div>
    </>
  )
  
}

export default ProjectPage;