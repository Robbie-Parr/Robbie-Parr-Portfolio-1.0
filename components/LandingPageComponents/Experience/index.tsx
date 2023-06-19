import React from "react"
import Carousel from "./Carousel";

import styles from '@/styles/Experience.module.scss';



const Experience = () => {
    return(
        <div className="text-center" id={styles.main}>
            <h1 id={styles.title}>Experience</h1>
            <Carousel/>
        </div>
    )
}

export default Experience;