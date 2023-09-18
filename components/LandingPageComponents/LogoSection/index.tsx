import React from "react";

import styles from '@/styles/LogoSection.module.scss';


import LogoIcon from "./LogoIcon"

const LogoSection = () => {
    return(
        <div className="" id={styles.header_image}>
            <LogoIcon/>    
        </div>
    )
}

export default LogoSection;