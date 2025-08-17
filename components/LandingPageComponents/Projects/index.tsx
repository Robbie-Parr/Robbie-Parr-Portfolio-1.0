import React, {useEffect, useState } from "react"

import store from "@/Redux/store";


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
        <div className="" id="projectsMain">
            <div id="projectTitle">
                <h1>Projects</h1>
            </div>

            <div className="flex" id="content_section">
                <div className="flex-col" id="selected">
                
                    <div className="flex" id="selected_title">
                        {selectedNode!=="" ? (<h1>{selectedNode}</h1>): (<h1>Hello there</h1>)}
                        <a href={"/projects/"+selectedNode} id="toSelected">Find out more</a>
                    </div>
                    {selectedNode!=="" ? 

                        (
                            
                        <div className="flex-col space-y-4" id="selected_info">
                            <p>{nodes[nodes.findIndex((node) => node.id===selectedNode)].overview}</p>
                            
                        </div>
                        
                        )
                        : 
                        (
                        <div className="flex-col space-y-4" id="selected_info">
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