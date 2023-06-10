import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Header.module.scss';

type Props = {}

const CVLink = ({}:Props) => {
    return(
        <a href="/CVRobbieParr.pdf" download>
            <div className={styles.CV_Icon}>
                <h2>CV</h2>
            </div>
        </a>
    )
}

export default CVLink;