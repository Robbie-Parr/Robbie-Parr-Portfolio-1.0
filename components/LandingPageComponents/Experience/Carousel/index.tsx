import React from "react";
import {useEffect, useState} from "react";

import styles from '@/styles/Experience.module.scss';

import store from "@/Redux/store";

import Card from "./Card";

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

const Carousel = () => {
    let experiences = [{
        id:"",
        data:{
            description:"",
        job_title:"",
        start_end_date:"",
        key_takeaways:[""],
        references:[""]
        }
    }];

    let experience = [...store.getState().experience]
    experiences = experience.reverse()
    
    
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    },[])

    return(
        <> {hydrated &&
        <div id={styles.carousel}>
            
            {experiences && experiences?.map( ({id,data}) => 
                <Card 
                    key={id+data.job_title}
                    establishment={id} 
                    job_title={data.job_title}
                    dates={data.start_end_date}
                    details={data.description}
                    key_takeaways={data.key_takeaways}
                    references={data.references}
                    />
            )}
            
            
        </div>}
        </>
    )
};

export default Carousel;