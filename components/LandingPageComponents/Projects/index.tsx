import React from "react"
import {useEffect, useState } from "react";

import store from "@/Redux/store";

import styles from '@/styles/ProjectSection.module.scss';


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

const Projects = () => {
    let nodes = [{id:"",overview:"",links:[""]}]
    nodes = [...store.getState().projectIds]
    

    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])

    const [selectedNode,setSelectedNode] = useState("")
    
    const onClickNode = function(nodeId:string) {
        setSelectedNode(nodeId)
    };

    return(<>{hydrated && 
        <div className="" id={styles.main}>
            <div id={styles.title}>
                <h1>Projects</h1>
            </div>

            <div className="flex" id={styles.content_section}>
                {nodes.length>1 &&
                <Graph 
                    onClickNode={onClickNode} 
                    nodeIds={nodes.map(node => ({id:node.id}))} 
                    links={nodes.map(node => ({source1:node.id,targets:node.links}))}/>
                }
                <div className="flex-col" id={styles.selected}>
                
                    <div className="flex" id={styles.selected_title}>
                        {selectedNode!=="" ? (<h1>{selectedNode}</h1>): (<h1>Hello there</h1>)}
                        <a href={"/projects/"+selectedNode} id={styles.toSelected}>Find out more</a>
                    </div>
                    {selectedNode!=="" ? 

                        (
                            
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>{nodes[nodes.findIndex((node) => node.id===selectedNode)].overview}</p>
                            
                        </div>
                        
                        )
                        : 
                        (
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>Please select a project node from the graph on the left to view the summary.</p>
                            <p>The graph nodes are linked depending on their influence/impact on other projects. For instance my React projects are all linked to my Portfolio, as I made/making the Portfolio with technical skills used in these projects.</p>
                            <p>I am currently working on improving this section.</p>
                        </div>)
                    }
                
                </div>
            
            </div>
        </div>
    }</>)
}

export default Projects;