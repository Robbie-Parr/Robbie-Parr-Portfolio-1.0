import React from "react";
import styles from '@/styles/Header.module.scss';


const CVLink = () => {
    return(
        <a href="/CVRobbieParr.pdf" download>
            <div className={styles.CV_Icon}>
                <h2>CV</h2>
            </div>
        </a>
    )
}

export default CVLink;