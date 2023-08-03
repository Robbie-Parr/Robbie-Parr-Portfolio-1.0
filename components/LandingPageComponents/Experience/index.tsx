import React from "react"
import Carousel from "./Carousel";

import styles from '@/styles/Experience.module.scss';

type Props = {
    experience:{id:string, 
    data:{
        description:string,
        job_title:string,
        start_end_date:string,
        key_takeaways:string[],
        references:string[]
    }}[]
}

const Experience = ({experience}:Props) => {
    
    return(
        <div className="text-center" id={styles.main}>
            <h1 id={styles.title}>Experience</h1>
            <Carousel experience={experience}/>
        </div>
    )
}

export default Experience;