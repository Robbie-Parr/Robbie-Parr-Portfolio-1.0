import React, {useEffect, useState } from "react";

const useProject = (id:string) => {
    const [node,setNode] = useState({
        links:[""],
        text_sections:[],
        skills:[],
        project_status:"",
        start_end_dates:"",
        image_links:[],
        overview:"",
        cover_image:"",
    })

    const [sections,setSections] = useState([{
        text:"",
        image:"",
        index:0
    }])
  
  
    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("../api/Projects",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({
                doc:id,
              })
          })
          if(response.status !==404){
              const responsejson = await (response).json()
              
              setNode(responsejson.data)
          }}
      fetchData();
      },[id]);


    const combine_Text_and_Image = (text_sections:string[],image_links:string[]) => {
        const data = []
        if(text_sections){
          for(let i=0;i<text_sections.length;i++){
            data.push({
              text:text_sections[i],
              image:image_links[i],
              index:i
            })
          }
        }
        return data
    }

    useEffect(() => {
        const request = () => setSections(combine_Text_and_Image(node?.text_sections,node?.image_links))
        request()
    },[node])

    return {node,sections};
}

export default useProject;