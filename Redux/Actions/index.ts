import { Dispatch } from "@reduxjs/toolkit";


import { 
    UPDATE_ABOUT, 
    AboutType,
    createUpdateAbout} from "./aboutActions";
import { 
    UPDATE_EXPERIENCE, 
    ExperienceType, 
    createUpdateExperience } from "./experienceActions";
import { 
    UPDATE_PROJECTS,
    SET_CURRENT_PROJECT,
    ProjectsType,
    SingularProjectType,
    createUpdateProjects,
    createSetCurrentProject} from "./projectsActions";
import { 
    UPDATE_SKILLS, 
    InputSkillType,
    SkillsType,createUpdateSkills} from "./skillActions";

import {
    SET_CURRENT_RECIPE,
    RecipeType,
    createSetCurrentRecipe
} from "./recipeActions"

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
    SET_CURRENT_PROJECT,createSetCurrentProject,
    UPDATE_SKILLS, createUpdateSkills,
    SET_CURRENT_RECIPE,createSetCurrentRecipe
}

export type {
    AboutType,
    ExperienceType,
    ProjectsType,
    SingularProjectType,
    SkillsType,
    InputSkillType,
    RecipeType
}