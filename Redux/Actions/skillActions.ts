export const UPDATE_SKILLS = "UPDATE_SKILLS";

export type SkillsType = {name:string,image:string}[]

export const createUpdateSkills = (skills:SkillsType) => ({
    type:UPDATE_SKILLS,
    payload:{data:{skills}}
})
