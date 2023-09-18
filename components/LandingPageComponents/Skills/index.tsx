import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import SkillsGraph from "./SkillsGraph";
import SkillsCarousel from "./SkillsCarousel";

import useSwitch from "./useSwitch";

const Skills = () => {
    const {value,flip} = useSwitch();

    return(
        <>
        <div onClick={flip} style={{color:"transparent"}}> {value ? "To Carousel" : "To Graph"} </div>
        {value ? 
            <SkillsGraph/> :
            <SkillsCarousel/>}
        </>
    )
}

export default Skills;