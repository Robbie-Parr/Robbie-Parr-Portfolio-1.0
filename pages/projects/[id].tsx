import { useRouter } from "next/router";
import React, {useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";

import styles from '@/styles/Projects.module.scss';
import Title from "../../components/Title";

const Page = () => {
  const router = useRouter();
  let {id} = router.query;
  id = ""+id;

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


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("../../../../api/Projects",{
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
      for(var i=0;i<text_sections.length;i++){
        data.push({
          text:text_sections[i],
          image:image_links[i],
          index:i
        })
      }
    }
    return data
  }


  return(
    <>
    <Title pageTitle={id+" Project"}/>
    <div id={styles.single_project}>
      
      <div id={styles.header}>
        <div className="flex" style={{backgroundImage:"url("+node?.cover_image+")"}}>
          <div>
            <a href="../projects" className="">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="xl" />
            </a>
          </div>
          <div/>
        </div>
        
        <div className="flex">
          <h1 className="m-4 p-2">{id}</h1>
            <div id={styles.first_section}>
              <p>{node?.overview}</p>
            </div>
        </div>
      </div>
      
      
      

      {/* todo: Map through Skills*/}


      {(combine_Text_and_Image(node?.text_sections,node?.image_links)).map(
        ({text,image,index}) => {
          if(index%2==0){
          return(
            <div key={index} id={styles.left}>
              <img src={image}/>

              <div>
                {(text.split("\\n")).map(i => 
                  <p key={i}>{i}</p>
                  )}
              </div>
            </div>
          )
          }else{
            return(
            <div key={index} id={styles.right}>
              <div>
                {(text.split("\\n")).map(i => 
                  <p key={i}>{i}</p>
                  )}
              </div>
              
              <img src={image}/>
            </div>)
          }
        })
      }
    </div>

    </>
  )
    
  }
  
  export default Page;