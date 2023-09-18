import React,{useEffect,useState} from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import styles from '@/styles/LogoSection.module.scss';

import {imageRequest} from "../../../pages/api/firebase";

const LogoIcon = () => {

    const [logoURL,setLogoURL] = useState("");
    const [revealed, setRevealed] = useState(false);


    useEffect(() => {
        const result = async () => {
            let res = await imageRequest("ProfilePicture032.png")
            setLogoURL(res);
        }
        result()
    },[])

    const animationProps = {
        initial: { rotateY: 0 },
        whileTap:{ rotateY: -170, transition: { duration: .5 } },
        transition:{ rotateY: -170, transition: { duration: .5 } }
      };

    return(
            <div className={styles.Logo_Icon}>
                <motion.div {...animationProps} onClick={() => setRevealed((prevRevealed) => !prevRevealed)}>
                    <img id={styles.icon} alt="Logo" src={revealed ? logoURL : "/Logo.png"} />
                </motion.div>
            </div>
        
    )
}

export default LogoIcon;