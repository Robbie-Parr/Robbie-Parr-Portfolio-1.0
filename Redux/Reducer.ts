import { AnyAction } from "@reduxjs/toolkit";
import { 
    UPDATE_ALL,
    UPDATE_ABOUT,
    UPDATE_EXPERIENCE,
    UPDATE_PROJECTS,
    UPDATE_SKILLS,
    SingularProjectType, 
    createUpdateAbout,
    createUpdateExperience,
    createUpdateProjects,
    createUpdateSkills} from "./Actions/index";


export const Reducer = (state:any,action:AnyAction) => {
    switch (action.type){
        case UPDATE_ABOUT:{
            const {data} = action.payload;
            return {...state,about:data}
        }
        case UPDATE_EXPERIENCE:{
            const {data} = action.payload;
            return {...state,experience:data}
        }
        case UPDATE_PROJECTS:{
            const {data} = action.payload;
            const justIds = data.map(({id,data}:SingularProjectType) => {
              const {overview} = data;
              return {id,overview}
            })
            return {...state,projects:data,projectIds:justIds}
        }
        case UPDATE_SKILLS:{
            const {data} = action.payload;
            return {...state,skills:data}
        }
        case UPDATE_ALL:{
            const {dispatch,about,experience,projects,skills} = action.payload;
            dispatch(createUpdateAbout(about))
            dispatch(createUpdateExperience(experience))
            dispatch(createUpdateProjects(projects))
            dispatch(createUpdateSkills(skills))
            //Above causing errors modify to use thunk?
            return state
        }
        default:
            return state;
    }
}