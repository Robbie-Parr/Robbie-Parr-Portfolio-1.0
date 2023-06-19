import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Header.module.scss';



const LinkedInIcon = () => {
    return(
        <a href="https://www.linkedin.com/in/robbie-parr/">
            <div className={styles.LinkedIn_icon}>
                <FontAwesomeIcon icon={faLinkedin} className="text-white" size="xl" />
            </div>
        </a>
    )
}

export default LinkedInIcon;