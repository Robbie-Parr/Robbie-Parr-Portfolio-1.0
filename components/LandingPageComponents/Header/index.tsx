import React from "react";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import MeetupIcon from "./MeetupIcon";
import BlogIcon from "./BlogIcon";

import styles from '@/styles/Header.module.scss';

type Props = {}

const Header = ({}:Props) => {
    return(
        <div className="text-center flex flex-row w-full" id={styles.header}>
            <div className={styles.header_image}>
                <img src="/Logo.png"/>
            </div>

            <div className="gap-x-5" id={styles.header_icon_section}>
                <div className="flex gap-x-5" id={styles.vital_icons}>
                    <LinkedInIcon/>
                    <CVLink/>
                </div>
                <div className="flex gap-x-3" id={styles.nonvital_icons}>
                    <MeetupIcon/>
                    <BlogIcon/>
                </div>
            </div>
        </div>
    )
}

export default Header;