import React from "react"
import {useEffect, useState } from "react";
import { Graph } from "react-d3-graph";

import styles from '@/styles/ProjectSection.module.scss';
import { list } from "postcss";

type Props = {
    onClickNode : (nodeId: string) => void,
    nodeIds: {id: string}[],
    links:{source1:string,targets:string[]}[]
}

const Projects = ({onClickNode,nodeIds,links}:Props) => {

    const focus = 1.4;
    const size = 420;
    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: "darkorange",
            size: size,
            highlightStrokeColor: "orange",
        },
        link: {
            highlightColor: "darkgray",
        },
        directed:true,
        focusZoom:focus,
    };

    let graphLinks = [{source:"",target:""}]
    graphLinks = [...links.map(({source1,targets}) => 
        targets.map(id => ({ source: source1, target: id }))
        )].flat(1)
    

    
    const data = {
        nodes: 
            [...nodeIds,{id:""}],
        links: 
            [...graphLinks],
    };
    
    return(
        <div id={styles.graph}>
            <div id={styles.innerGraph}>
                { 
                <Graph
                    id="graph-id"
                    data={data}
                    config={config}
                    onClickNode={onClickNode}                
                />
                }
                
            </div>
        </div>
    )
}

export default Projects;