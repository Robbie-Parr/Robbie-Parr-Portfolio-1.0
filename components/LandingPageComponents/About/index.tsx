import React from "react";
import {motion} from "framer-motion";

import styles from '@/styles/About.module.scss';

type Props = {}



const About = ({}:Props) => {

    const aboutme_list_of_text = [
        `With over 7 Years Python programming experience, React Native cross platform app development and 3D/VR Game development. 
        I'm keen to learn new programming languages and frameworks, regularly designing small projects to code in a new 
        environment or language. Some of these projects are on display here and on my LinkedIn.`,

        `Being very organised and reliable with good communication, team working and problem-solving skills. Makes me an 
        invaluable member of any team. In the past I have undertaken leadership roles and have encouraged team bonding, which has improved team cohesion
        and performance at stress points in the project/group. I have been a vital part of many projects and a few groups,
        helping to drive innovation while encoraging skill and personal growth. I've worked in interdisciplinary teams on Consultancy based and Tech based projects.
        Creating very nuanced approaches to problems producing creative out of the box solutions.`,

        `I recently finished my Third and Final year studying Computer Science at the University of York, graduating July 2023.`,
        
        `Please contact me via LinkedIn if you have an opportunity, and if I don't have a language or framework skill you are looking for, tell me what the language 
        or framework is and I'll go learn it.`
    ]

    return(
        <motion.div 
            initial={{
                x:-500,
                opacity:0,
            }}

            animate={{
                x:0,
                opacity:1,
            }}

            transition={{
                duration:1.2
            }}
        
            className="flex-row flex" id={styles.main_about_section}
            >
            <h1 className="text-center items-center justify-center p-4" id={styles.about_title}>About Me</h1>
            <motion.div 
                initial={{
                    opacity:0,
                    scale:0.8
                }}

                animate={{
                    opacity:1,
                    scale:1
                }}

                transition={{
                    duration:1.2
                }}
            
                className="space-y-5 p-4 bg-white" id={styles.about_text}
                >
                {aboutme_list_of_text.map(text => <p key={text}>{text}</p>)}
            </motion.div>
        </motion.div>
    )
}

export default About;