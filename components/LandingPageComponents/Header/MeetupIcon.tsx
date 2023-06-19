import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Header.module.scss';


const MeetupIcon = () => {
    return(
        <a href="https://www.meetup.com/en-AU/parr-ty-events/">
            <div className={styles.Meetup_icon}>
                <FontAwesomeIcon icon={faMeetup} className="text-white" size="xl" />
            </div>
        </a>
    )
}

export default MeetupIcon;