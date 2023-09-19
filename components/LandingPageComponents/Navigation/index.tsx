import React from "react";
import {motion} from "framer-motion";

import PageLinks from "./PageLinks";

import styles from '@/styles/NavigationSection.module.scss';

const Navigation = () => {

    const data = [
        {title:"About",link:"/#about"},
        {title:"Experience",link:"/#experience"},
        {title:"Skills",link:"/#skills"},
        {title:"Projects",link:"/#projects-section"},
        {title:"Contact Me",link:"/#contact-form"}
    ]

    return(
        <motion.nav
            initial={{
                y:"-50%",
                opacity:0,
            }}

            animate={{
                y:0,
                opacity:1,
            }}

            transition={{
                duration:1.2,
                delay:.5,
            }}
         className="flex gap-x-5" id={styles.container}>
            {data.map(props => <PageLinks {...props} />)}
        </motion.nav>
    )
}

export default Navigation;