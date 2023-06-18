import React from "react";
import {useEffect, useState} from "react";

import styles from '@/styles/Experience.module.scss';

import Card from "./Card";

type Props = {};

const Carousel = ({}:Props) => {
    const [experiences,setExperiences] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("../../../../api/ExperienceCarousel",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            if(response.status !==404){
                const responsejson = await ( await response).json()
                setExperiences(responsejson.data)
            }}
        fetchData();
        },[]);
    
        //console.log(experiences)

    return(
        <div id={styles.carousel}>
            
            {experiences?.map( ({establishment,job_title,dates,details,key_takeaways,references}) => 
                <Card 
                    key={establishment+job_title}
                    establishment={establishment} 
                    job_title={job_title}
                    dates={dates}
                    details={details}
                    key_takeaways={key_takeaways}
                    references={references}
                    />
            )}
            
        </div>
    )
};

export default Carousel;