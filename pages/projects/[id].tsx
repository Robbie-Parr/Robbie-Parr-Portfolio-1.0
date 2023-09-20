import { useRouter } from "next/router";
import React, {useEffect, useState } from "react";


import styles from '@/styles/Projects.module.scss';
import Title from "../../components/Title";
import {Navigation} from "../../components/ProjectPageComponents"

import useProject from "@/components/ProjectPageComponents/useProject";

const Page = () => {
  const router = useRouter();
  let {id} = router.query;
  id = ""+id;

  const {node,sections} = useProject(id);
  
  return(
    <>
    <Title pageTitle={id+" Project"}/>
    <div id={styles.single_project}>
      
      <div id={styles.header}>
        <Navigation href="../projects"/>
        <div className="flex" style={{backgroundImage:"url("+node?.cover_image+")",paddingBottom:"20%"}}/>
        
        <div className="flex">
          <h1 className="m-4 p-2">{id}</h1>
            <div id={styles.first_section}>
              <p>{node?.overview}</p>
            </div>
        </div>
      </div>      

      {/* todo: Map through Skills*/}

      {(sections).map(
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

