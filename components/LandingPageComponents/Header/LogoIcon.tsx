import React from "react";
import styles from '@/styles/Header.module.scss';

const LogoIcon = () => {
    return(
            <div className={styles.Logo_Icon}>
                <a href="">
                    <img src="/Logo.png"/>
                </a>
            </div>
        
    )
}

export default LogoIcon;