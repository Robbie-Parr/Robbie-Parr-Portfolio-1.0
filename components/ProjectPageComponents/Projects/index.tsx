import React from "react"
import {useEffect, useState } from "react";

import styles from '@/styles/Projects.module.scss';

import Graph from "./Graph";

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
    }[]
}

const Projects = ({nodes}:Props) => {
    
    const [nodesSelected,setNodeSelected] = useState([""]);
    
    const onClickNode = function(nodeId:string) {
        if (nodesSelected.indexOf(nodeId)===-1){
            setNodeSelected([nodeId,...nodesSelected])
        }
    };

    
    return(
        <div className="" id={styles.graph_main}>
            <div className="flex-col" id={styles.content_section}>
                {nodes.length>1 &&
                <Graph 
                    onClickNode={onClickNode} 
                    nodeIds={nodes.map(node => ({id:node.id}))} 
                    links={nodes.map(node => ({source1:node.id,targets:node.data.links}))}/>
                }
                <div className="" id={styles.carousel}>
                    {nodesSelected.map(selectedNode => 
                    
                <div className="flex-col" id={styles.selected}>
                
                    <div className="flex" id={styles.selected_title}>
                        {selectedNode!=="" ? (<h1>{selectedNode}</h1>): (<h1>Hello there</h1>)}
                        {selectedNode!=="" ? (<a href={"/projects/"+selectedNode} id={styles.toSelected}>Find out more</a>) : (<p></p>)}
                    </div>
                    
                    {selectedNode!=="" ? 

                        (
                            
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>{nodes[nodes.findIndex((node) => node.id===selectedNode)].data.overview}</p>
                            
                        </div>
                        
                        )
                        : 
                        (
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>Please select a project node from the graph on the left to view the summary.</p>
                            <p>The graph nodes are linked depending on their influence/impact on other projects. For instance my React projects are all linked to my Portfolio, as I made/making the Portfolio with technical skills used in these projects.</p>
                            <p>I am currently working on improving this section. If you have any suggestions please contact me.</p>
                        </div>)
                    }
                    </div>
                    )}
                </div>
                
            
            
            </div>
        </div>
        )
}

export default Projects;