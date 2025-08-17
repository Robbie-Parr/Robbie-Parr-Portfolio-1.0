import React from "react";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import store from "@/Redux/store";
import Title from "../../../components/Title";

import { useRecipe,TitleSection,ListSection } from "../../../components/RecipeComponents";


const Page = () => {
  const router = useRouter();
  const  {series,id} = router.query;

  const seriesString:string = series?.toString() || "";
  const idString:string=id?.toString() || "";
  const {recipe} = useRecipe(seriesString,idString);

  return(
    <Provider store={store}>
      <Title pageTitle="Recipe"/>
      
    <TitleSection series={seriesString} id={idString}/>

    {recipe && 
    <>
      <ListSection title={"Ingredients"} list={recipe.ingredients}/>
      <ListSection title={"Equipment"} list={recipe.equipment} area={2}/>
      <ListSection title={"Method"} list={recipe.method} numbered/>
    </>}

    <div className="text_area2">
      <p>
        {recipe.extra}
      </p>
    </div>

    <div style={{marginBottom:50}}/>

    </Provider>
  )
    
}
  
export default Page;