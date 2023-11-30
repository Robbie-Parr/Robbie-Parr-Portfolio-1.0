import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import store from "@/Redux/store";
import Title from "../../../components/Title";

import styles from '@/styles/Recipes.module.scss';

import { useRecipe,TitleSection,ListSection } from "../../../components/RecipeComponents";

import { RecipeType } from "@/Redux/Actions";


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

    <div className={styles.text_area2}>
      <p>
        {recipe.extra}
      </p>
    </div>

    <div style={{marginBottom:50}}/>

    </Provider>
  )
    
}
  
export default Page;