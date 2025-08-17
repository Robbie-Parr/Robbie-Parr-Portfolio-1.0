import React from "react";
import {motion} from "framer-motion";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import GitHubIcon from "./GithubIcon";


const Header = () => {
    
    return(
        <div id="header">
            <div id="header_icon_section">
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
     id="vital_icons">
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
            }} id="nonvital_icons">
                 <GitHubIcon/>
                </motion.div>
            </div>
        </div>
    )
}

export default Header;