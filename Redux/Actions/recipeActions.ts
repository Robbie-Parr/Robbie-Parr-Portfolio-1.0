export const SET_CURRENT_RECIPE = "SET_CURRENT_RECIPE";

export type RecipeType = {
    title:string,
    picture:string,
    description:string,
    ingredients:string[]
    equipment:string[],
    method:string[],
    extra:string
  }



  export const createSetCurrentRecipe = (recipe:RecipeType) => ({
    type:SET_CURRENT_RECIPE,
    payload:{data:{...recipe}}
  })