import React,{useEffect} from "react"
import Carousel from "./Carousel";

import store from "@/Redux/store";

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

const Experience = () => {
    return(
        <div className="text-center" id={styles.main}>
            <h1 id={styles.title}>Experience</h1>
            <Carousel/>
        </div>
    )
}

export default Experience;