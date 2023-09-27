import { AnyAction } from "@reduxjs/toolkit";
import { 
    UPDATE_ALL,
    UPDATE_ABOUT,
    UPDATE_EXPERIENCE,
    UPDATE_PROJECTS,
    SET_CURRENT_PROJECT,
    UPDATE_SKILLS,
    SingularProjectType,
    InputSkillType,
    createUpdateAbout,
    createUpdateExperience,
    createUpdateProjects,
    createUpdateSkills} from "./Actions/index";


export const Reducer = (state:any,action:AnyAction) => {
    switch (action.type){
        case UPDATE_ABOUT:{
            const {data} = action.payload;
            return {...state,about:{...data}}
        }
        case UPDATE_EXPERIENCE:{
            const {data} = action.payload;
            return {...state,experience:[...data]}
        }
        case UPDATE_PROJECTS:{
            const {data} = action.payload;
            const justIds = data.map(({id,data}:SingularProjectType) => {
              const {overview,links} = data;
              return {id,overview,links}
            })
            return {...state,projects:[...data],projectIds:justIds}
        }
        case UPDATE_SKILLS:{
            const {data} = action.payload;
            const newData = data.map(({id,data}:InputSkillType) => ({name:id,image:data.image_url}))
            return {...state,skills:newData}
        }
        case UPDATE_ALL:{
            const {about,experience,projects,skills} = action.payload;
            state = Reducer(state,createUpdateAbout(about))
            state = Reducer(state,createUpdateExperience(experience))
            state = Reducer(state,createUpdateProjects(projects))
            state = Reducer(state,createUpdateSkills(skills))
            return state
        }
        case SET_CURRENT_PROJECT:{
            const {data} = action.payload;
            return {...state, [data.id]:{...data.data}}
        }
        default:
            return state;
    }
}