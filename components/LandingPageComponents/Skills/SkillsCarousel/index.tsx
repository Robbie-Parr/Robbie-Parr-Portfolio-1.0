import React from "react";

import useSkills from "../useSkills";
import Card from "./Card";



const SkillsCarousel = () => {
    const skills = useSkills();

    return(
        <div id="skillsMain">
        <div id="skillTitle">
            <h1>Skills</h1>
        </div>
        <div id="carousel_container">
            {skills.reverse().map((skill) => 
                <Card key={skill.name} {...skill}/>
                )}
        </div>
        </div>
    )
}

export default SkillsCarousel;