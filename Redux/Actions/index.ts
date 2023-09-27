import { Dispatch } from "@reduxjs/toolkit";


import { UPDATE_ABOUT, AboutType,createUpdateAbout} from "./aboutActions";
import { UPDATE_EXPERIENCE, ExperienceType, createUpdateExperience } from "./experienceActions";
import { UPDATE_PROJECTS,ProjectsType,createUpdateProjects,SingularProjectType } from "./projectsActions";
import { UPDATE_SKILLS, SkillsType,createUpdateSkills } from "./skillActions";


export const UPDATE_ALL = "UPDATE_ALL";



export const createUpdateAll = (about:AboutType,
                                experience:ExperienceType,
                                projects:ProjectsType,
                                skills:SkillsType) => ({
        type:UPDATE_ALL,
        payload:{about,experience,projects,skills}
        })

export { 
    UPDATE_ABOUT, createUpdateAbout,
    UPDATE_EXPERIENCE, createUpdateExperience,
    UPDATE_PROJECTS, createUpdateProjects,
    UPDATE_SKILLS, createUpdateSkills,
}

export type {
    AboutType,
    ExperienceType,
    ProjectsType,
    SingularProjectType,
    SkillsType
}