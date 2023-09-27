import React,{useEffect, useState} from "react";
import {motion} from "framer-motion";
import store from "@/Redux/store";

import styles from '@/styles/About.module.scss';

type Props = {
    list:{
        images:string[],
        text:string[]
    }
}


const About = () => {

    let list = {images:[""],text:["You may not be able to connect to the database.","Please wait for this information to load.", "If this issue persists, check your internet connection and or get in contact."]}
    let newList = store.getState().about
    if(newList.text && newList.text.length>0){
        list = newList;
    }
    

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
                duration:1.2,
                delay:.5,
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
                
                {list.text?.map(text => <p key={text}>{text}</p>)}
            </motion.div>
        </motion.div>
    )
}

export default About;

