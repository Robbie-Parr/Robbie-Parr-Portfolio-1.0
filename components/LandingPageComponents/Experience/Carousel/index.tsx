import React from "react";
import {useEffect, useState} from "react";

import styles from '@/styles/Experience.module.scss';

import Card from "./Card";


const Carousel = () => {
    const [experiences,setExperiences] = useState([
        {id:"Loading Card", data:{
            description:"Details are loading",
            job_title:"Job title section",
            start_end_date:"then - now",
            key_takeaways:["You may not be able to connect to the database"],
            references:["Ask me in the form to send you thins information if this issue persists"]
        }}
    ])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("../../../../api/ExperienceCarousel",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            if(response.status !==404){
                const responsejson = await (response).json()
                setExperiences(responsejson.data.reverse())
            }}
        fetchData();
        },[]);


    return(
        <div id={styles.carousel}>
            
            {experiences?.map( ({id,data}) => 
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
            
        </div>
    )
};

export default Carousel;