import React from "react"
import Carousel from "./Carousel";

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
        <div className="text-center" id="experienceMain">
            <h1 id="experiencetitle">Experience</h1>
            <Carousel/>
        </div>
    )
}

export default Experience;