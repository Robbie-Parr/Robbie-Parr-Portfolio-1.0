import React from "react";
import {motion} from "framer-motion";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import MeetupIcon from "./MeetupIcon";
import BlogIcon from "./BlogIcon";
import GitHubIcon from "./GithubIcon";

import styles from '@/styles/Header.module.scss';


const Header = () => {
    
    return(
        <div className="text-center flex w-full" id={styles.header}>
            

            <div className="gap-x-5" id={styles.header_icon_section}>
            <motion.div 
            initial={{
                x:"50%",
                opacity:0,
            }}

            animate={{
                x:"12%",
                opacity:1,
                scale:1.25,
            }}

            transition={{
                duration:1.2,
                delay:.5,
            }}
         className="flex gap-x-5" id={styles.vital_icons}>
                    <LinkedInIcon/>
                    <CVLink/>
                </motion.div>
                <motion.div 
            initial={{
                x:"-50%",
                opacity:0,
            }}

            animate={{
                x:0,
                opacity:1,
                scale:1.25,
            }}

            transition={{
                duration:1.2,
                delay:.5,
            }} className="flex gap-x-3" id={styles.nonvital_icons}>
                    <MeetupIcon/>
                    <GitHubIcon/>
                    <BlogIcon/>
                </motion.div>
            </div>
        </div>
    )
}

export default Header;