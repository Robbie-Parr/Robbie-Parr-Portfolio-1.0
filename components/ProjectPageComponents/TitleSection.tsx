import React, {useEffect, useState } from "react";
import styles from '@/styles/Projects.module.scss';

import useProject from "./useProject";

const TitleSection = ({id}:{id:string}) => {
    const {node,sections} = useProject(id);

    
    return(
        <>
         {node && node.overview.length>0 && <>
        <div className="flex" style={{backgroundImage:"url("+node?.cover_image+")",paddingBottom:"20%"}}/>
        
        <div className="flex">
          <h1 className="m-4 p-2">{id}</h1>
            <div id={styles.first_section}>
              <p>{node?.overview}</p>
            </div>
        </div>
        </>}
        </>
    )
}

export default TitleSection;