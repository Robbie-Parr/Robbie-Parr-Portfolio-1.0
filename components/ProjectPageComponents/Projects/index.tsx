import React, {useEffect, useState } from "react";

import styles from '@/styles/Projects.module.scss';

import Graph from "./Graph";
import SelectedDisplay from "./SelectedDisplay";

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
                <div className="" id={styles.carousel}>
                    {nodesSelected.map(selectedNode => 
                        <SelectedDisplay key={selectedNode} selectedNode={selectedNode} nodes={nodes} />
                    )}
                </div>
                
                {nodes.length>1 &&
                <Graph 
                    onClickNode={onClickNode} 
                    nodeIds={nodes.map(node => ({id:node.id}))} 
                    links={nodes.map(node => ({source1:node.id,targets:node.data.links}))}/>
                }
            </div>
        </div>
        )
}

export default Projects;