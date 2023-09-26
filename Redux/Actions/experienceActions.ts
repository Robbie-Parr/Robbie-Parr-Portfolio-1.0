export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";

export type ExperienceType = {
    id:string, 
    data:{
      description:string,
      job_title:string,
      start_end_date:string,
      key_takeaways:string[],
      references:string[]
    }
}[]


export const createUpdateExperience = (experience:ExperienceType) => ({
    type:UPDATE_EXPERIENCE,
    payload:{data:{experience}}
})
