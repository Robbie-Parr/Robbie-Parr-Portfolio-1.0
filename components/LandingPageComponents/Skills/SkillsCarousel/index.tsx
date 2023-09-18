import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";

import styles from '@/styles/Skills.module.scss';

import useSkills from "../useSkills";
import Card from "./Card";



const SkillsCarousel = () => {
    const skills = useSkills();

    return(
        <div id={styles.carousel_container}>
            {skills.reverse().map((skill) => 
                <Card key={skill.name} {...skill}/>
                )}
        </div>
    )
}

export default SkillsCarousel;