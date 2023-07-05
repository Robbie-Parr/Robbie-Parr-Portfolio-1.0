import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';

import {imageRequest} from "../../../pages/api/firebase";

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
    const [inView,setInView] = useState(false)

    //id={styles.skill}

    const [logoURL,setLogoURL] = useState("");

    useEffect(() => {
        const result = async () => {
            let res = await imageRequest(object.image)
            setLogoURL(res);
        }
        result()
    },[])

    return(
        <motion.div key={object.name} 
            initial={{left:"50%",top:"50%"}} 
            whileInView={{left:`${xPos}%`,top:`${yPos}%`}}
            transition={{duration:1,delay:index/10}}
            style={{width:"70px",
                    height:"70px",
                    borderRadius: "50%",
                    padding:"1%",
                    boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    backgroundImage: `url(${logoURL})`,
                    backgroundSize:"cover",
                    zIndex: inView ? 10 : 1,
                    position: inView ? "relative" : "absolute"
                }}
            >
            <div onClick={() => setInView(!inView)} 
                style={{backgroundColor:"whitesmoke",
                        opacity:inView ? .8: 0,
                        width:"70px",
                        height:"70px",
                        margin:"-38%",//"-15px",
                        
                        borderRadius: "50%",
                        textSizeAdjust:".2",
                        zIndex: inView ? 10 : 1,
                    position:"relative"}}
                        
                ><p style={{paddingTop:"30%",scale:".9"}}>{object.name}</p></div>
        </motion.div>
    )
}

export default SkillPoint;