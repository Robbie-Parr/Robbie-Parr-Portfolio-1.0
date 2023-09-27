export const UPDATE_PROJECTS = "UPDATE_PROJECTS";


export type ProjectsType = {
  id:string,
  data:{
    links:string[],
    text_sections:string[],
    skills:string[],
    project_status:string,
    start_end_dates:string,
    image_links:string[],
    overview:string
  }
}[]

export type SingularProjectType = {
  id:string,
  data:{
    links:string[],
    text_sections:string[],
    skills:string[],
    project_status:string,
    start_end_dates:string,
    image_links:string[],
    overview:string
  }
}

export const createUpdateProjects = (projects:ProjectsType) => ({
    type:UPDATE_PROJECTS,
    payload:{data:projects}
})
