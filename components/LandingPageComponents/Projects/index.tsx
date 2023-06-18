import React from "react"
import {useEffect, useState } from "react";

import styles from '@/styles/ProjectSection.module.scss';

import Graph from "./Graph";


type Props = {}

const Projects = ({}:Props) => {
    const [selectedNode,setSelectedNode] = useState("")
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
    
    
    const onClickNode = function(nodeId:string) {
        setSelectedNode(nodeId)
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("../../../../api/Projects",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            if(response.status !==404){
                const responsejson = await ( await response).json()
                //console.log(responsejson.data)
                setNodes(responsejson.data)
            }}
        fetchData();
        },[]);

    //console.log(nodes)
  
    return(
        <div className="" id={styles.main}>
            <div id={styles.title}>
                <h1>Projects</h1>
            </div>

            <div className="flex" id={styles.content_section}>
                {nodes.length>1 &&
                <Graph 
                    onClickNode={onClickNode} 
                    nodeIds={nodes.map(node => ({id:node.id}))} 
                    links={nodes.map(node => ({source1:node.id,targets:node.data.links}))}/>
                }
                <div className="flex-col" id={styles.selected}>
                    <div id={styles.selected_title}>
                        {selectedNode!=="" ? (<h1>{selectedNode}</h1>): (<h1>Hello there</h1>)}
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
                            <p>Currently this section is under development.</p>
                        </div>)
                    }

                </div>
            
            </div>
        </div>
    )
}

export default Projects;