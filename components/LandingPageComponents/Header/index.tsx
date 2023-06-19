import React from "react";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import MeetupIcon from "./MeetupIcon";
import BlogIcon from "./BlogIcon";

import styles from '@/styles/Header.module.scss';


const Header = () => {
    return(
        <div className="text-center flex w-full" id={styles.header}>
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

            <div className="" id={styles.lower_header_image}>
                <img src="/Logo.png"/>
            </div>
        </div>
    )
}

export default Header;