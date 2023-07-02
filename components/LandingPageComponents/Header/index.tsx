import React,{useEffect,useState} from "react";

import LinkedInIcon from "./LinkedInIcon";
import CVLink from "./CVLink"
import MeetupIcon from "./MeetupIcon";
import BlogIcon from "./BlogIcon";
import GitHubIcon from "./GithubIcon";
import LogoIcon from "./LogoIcon"

import {imageRequest} from "../../../pages/api/firebase";


import styles from '@/styles/Header.module.scss';




const Header = () => {
    const [logoURL,setLogoURL] = useState("");

    useEffect(() => {
        const result = async () => {
            let res = await imageRequest("ProfilePicture032.png")
            setLogoURL(res);
        }
        result()
    },[])
    return(
        <div className="text-center flex w-full" id={styles.header}>
            {/* todo: Change "Logo" Image into a interactive object simulating a coin*/}
            <div className={styles.header_image}>
            <LogoIcon/>
            </div>

            <div className="gap-x-5" id={styles.header_icon_section}>
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

            <div className="" id={styles.lower_header_image}>
                <LogoIcon/>
            </div>
        </div>
    )
}

export default Header;