import React from "react";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import MeetupIcon from "./MeetupIcon";
import BlogIcon from "./BlogIcon";
import GitHubIcon from "./GithubIcon";

import styles from '@/styles/Header.module.scss';


const Header = () => {
    
    return(
        <div className="text-center flex w-full" id={styles.header}>
            <div className="gap-x-5 w-full" id={styles.header_icon_section}>
                <div className="flex gap-x-5" id={styles.vital_icons}>
                    <LinkedInIcon/>
                    <CVLink/>
                </div>
                <div className="flex gap-x-3" id={styles.nonvital_icons}>
                    <MeetupIcon/>
                    <GitHubIcon/>
                    <BlogIcon/>
                </div>
            </div>
        </div>
    )
}

export default Header;