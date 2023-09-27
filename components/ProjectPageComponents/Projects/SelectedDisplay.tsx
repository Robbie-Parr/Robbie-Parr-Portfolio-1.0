import React,{useEffect, useState } from "react";

import styles from '@/styles/Projects.module.scss';

type Props = {
    selectedNode:string,
    nodes: {
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
      }[]
}

const SelectedDisplay = ({selectedNode,nodes}:Props) => {
    return(
        <div className="flex-col" id={styles.selected}>
            <div className="flex" id={styles.selected_title}>
                {selectedNode!=="" ? 
                    (<h1>{selectedNode}</h1>) :
                    (<h1>Hello there</h1>)
                    }
                
                {selectedNode!=="" ? 
                    (<a href={"/projects/"+selectedNode} id={styles.toSelected}>Find out more</a>) : 
                    (<p></p>)
                    }
            </div>
        
            {selectedNode!=="" ? 
                (<div className="flex-col space-y-4" id={styles.selected_info}>
                    <p>{nodes[nodes.findIndex((node) => node.id===selectedNode)].data.overview}</p>
                </div>): 
                (<div className="flex-col space-y-4" id={styles.selected_info}>
                    <p>Please select a project node from the graph on the left to view the summary.</p>
                    <p>The graph nodes are linked depending on their influence/impact on other projects. For instance my React projects are all linked to my Portfolio, as I made/making the Portfolio with technical skills used in these projects.</p>
                    <p>I am currently working on improving this section. If you have any suggestions please contact me.</p>
                </div>)
                }
        </div>
    )
}

export default SelectedDisplay;