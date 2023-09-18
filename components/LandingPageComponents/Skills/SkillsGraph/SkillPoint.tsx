import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';
import useSwitch from "../useSwitch";
import useImage from "../useImage";

type item = {
    name:string,
    image:string,

};

type Props = {
    object:item,
    yPos:number,
    xPos:number,
    index:number
}

const SkillPoint = ({object,yPos,xPos,index}:Props) => {
    const {value,flip} = useSwitch()

    const image = useImage(object.image);

    return(
        <motion.div key={object.name} 
            initial={{left:"50%",top:"50%"}} 
            whileInView={{left:`${xPos}%`,top:`${yPos}%`}}
            transition={{duration:1,delay:index/10}}
            style={{width:"70px",
                    height:"70px",
                    borderRadius: "50%",
                    boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    backgroundImage: `url(${image})`,
                    backgroundSize:"cover",
                    zIndex: value ? 10 : 1,
                    position: "absolute"
                }}
            >
            <div onClick={flip} 
                style={{backgroundColor:"whitesmoke",
                        opacity:value ? .8: 0,
                        width:"70px",
                        height:"70px",
                        borderRadius: "50%",
                        textSizeAdjust:".2",
                        zIndex: value ? 10 : 1,
                    position:"absolute"}}
                        
                ><p style={{paddingTop:"30%",scale:".9"}}>{object.name}</p></div>
        </motion.div>
    )
}

export default SkillPoint;