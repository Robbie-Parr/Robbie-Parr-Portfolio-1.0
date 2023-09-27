import React, {useEffect, useState } from "react";
import styles from '@/styles/Projects.module.scss';

import useProject from "./useProject";


const SectionsMap = ({id}:{id:string}) => {
    const {node,sections} = useProject(id);

    return(<>
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
  </>)

}

export default SectionsMap;