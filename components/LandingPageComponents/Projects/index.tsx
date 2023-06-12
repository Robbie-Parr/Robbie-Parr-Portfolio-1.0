import React from "react"
import { useState } from "react";

import styles from '@/styles/ProjectSection.module.scss';

import Graph from "./Graph";


type Props = {}

const Projects = ({}:Props) => {
    const [selectedNode,setSelectedNode] = useState("")
    
    const onClickNode = function(nodeId:string) {
        setSelectedNode(nodeId)
    };
  
    return(
        <div className="" id={styles.main}>
            <div id={styles.title}>
                <h1>Projects</h1>
            </div>

            <div className="flex">
                <Graph onClickNode={onClickNode} />

                <div className="flex-col" id={styles.selected}>
                    <div id={styles.selected_title}>
                        {selectedNode!=="" ? (<h1>{selectedNode}</h1>): (<h1>Hello there</h1>)}
                    </div>
                    {selectedNode!=="" ? 

                        (
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>This is where the details of the project will be avaiable, once an appropriate summary is written.</p>
                            <p>This site is currently being worked on and I aim to have this section filled in soon.</p>
                            <p>If you have any queries about {selectedNode}, please email me.</p>
                        </div>
                        )
                        : 
                        (
                        <div className="flex-col space-y-4" id={styles.selected_info}>
                            <p>Please select a project node from the graph on the left to view the summary.</p>
                            <p>Currently a work in progress section...</p>
                        </div>)
                    }

                </div>
            
            </div>
        </div>
    )
}

export default Projects;