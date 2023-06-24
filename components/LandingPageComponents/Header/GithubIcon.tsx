import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Header.module.scss';


const GitHubIcon = () => {
    
    return(
        <a href="https://github.com/Robbie-Parr/Robbie-Parr-Portfolio-1.0/tree/main">
            <div className={styles.Github_icon}>
                <FontAwesomeIcon icon={faGithub} className="text-white" size="xl" />
            </div>
        </a>
    )
}

export default GitHubIcon;