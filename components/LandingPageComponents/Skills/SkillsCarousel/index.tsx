import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';

import useSkills from "../useSkills";
import Card from "./Card";



const SkillsCarousel = () => {
    const skills = useSkills();

    return(
        <div style={{flexDirection:"row",display:"flex"}}>
        <div id={styles.title}>
            <h1>Skills</h1>
        </div>
        <div id={styles.carousel_container}>
            {skills.reverse().map((skill) => 
                <Card key={skill.name} {...skill}/>
                )}
        </div>
        </div>
    )
}

export default SkillsCarousel;