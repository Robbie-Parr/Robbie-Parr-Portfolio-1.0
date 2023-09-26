export const UPDATE_ABOUT = "UPDATE_ABOUT";

export type AboutType = {text:string[],images:string[]}

export const createUpdateAbout = (about:AboutType) => ({
    type:UPDATE_ABOUT,
    payload:{data:{about}}
})