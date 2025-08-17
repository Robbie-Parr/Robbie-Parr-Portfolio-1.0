import React, {useState } from "react";

import store from "@/Redux/store";
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

const Projects = () => {
    const nodes = [...store.getState().projects]

    const [nodesSelected,setNodeSelected] = useState([""]);
    
    const onClickNode = function(nodeId:string) {
        if (nodesSelected.indexOf(nodeId)===-1){
            setNodeSelected([nodeId,...nodesSelected])
        }
    };

    
    return(
        <div className="" id="graph_main">
            <div className="flex-col" id="content_section">
                <div id="projectsCarousel">
                    {nodesSelected.map(selectedNode => 
                        <SelectedDisplay key={selectedNode} selectedNode={selectedNode} nodes={nodes} />
                    )}
                </div>
            
            </div>
        </div>
        )
}

export default Projects;