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

    console.log(nodeIds)
    console.log(links)
    let graphLinks = [{source:"",target:""}]
    graphLinks = [...links.map(({source1,targets}) => 
        targets.map(id => ({ source: source1, target: id }))
        )].flat(1)
    

    console.log("Graph links")
    console.log(graphLinks)
    
    const data = {
        nodes: 
            [...nodeIds,{id:""}]
            /*
            { id: "Portfolio"},
            { id: "Messenger App built using React Native" },
            { id: "3D Model for unique profile picture" },
            { id: "React Spotify Clone"},
            { id: "React Slack Clone"},
            { id: "Custom Made By Tag - npm package"},

            { id: '"First Person Shooter"' },
            { id: "In The Woods" },
            { id: "Room01"},
            { id: "The Office"},
            
            
            { id: "Seasons" },
            { id: "Mirror" },
            { id: "Energy" },
            { id: "Battleships" },

            { id: "Cryptography Mini System"},
            { id: "College Performance"},
            { id: "University financial tool" },

            { id: ""}
            */
        ,
        links: 
            [...graphLinks
            //{ source: "Messenger App built using React Native", target: "Portfolio" },
            ]
            /*
            { source: "Messenger App built using React Native", target: "Portfolio" },
            { source: "React Spotify Clone", target: "Portfolio" },
            { source: "React Slack Clone", target: "Portfolio" },
            { source: "3D Model for unique profile picture", target: "Portfolio"},
            { source: "Custom Made By Tag - npm package", target: "Portfolio"},

            { source: "The Office", target: "Room01" },
            { source: "Room01", target: "In The Woods" },
            { source: "Room01", target: '"First Person Shooter"' },
            { source: "In The Woods", target: '"First Person Shooter"' },

            { source: "Battleships", target: "Energy" },
            { source: "Battleships", target: "Mirror" },
            { source: "Battleships", target: "Seasons" },
            { source: "Energy", target: "Mirror" },
            { source: "Energy", target: "Seasons" },
            { source: "Mirror", target: "Seasons" },

            { source: "Cryptography Mini System", target: "College Performance" },
            { source: "Cryptography Mini System", target: "University financial tool" },
            { source: "College Performance", target: "University financial tool" },
            */
        ,
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