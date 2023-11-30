import React, {useEffect, useState } from "react";
import styles from '@/styles/Recipes.module.scss';

import useRecipe from "./useRecipe";
import useImage from "./useImage";


const TitleSection = ({series,id}:{series:string,id:string}) => {
    const {recipe} = useRecipe(series,id);
    
    const image_Url = useImage(recipe.picture || "")
    
    return(
        <>
         {recipe && <>

         <div className="flex p-4" style={{flexDirection:"row"}}>
          <div className="flex" style={{flexGrow:1}}/>
            <div className="flex" style={{
              backgroundImage:`url(${image_Url})`,
              paddingBottom:"20%",
              backgroundSize:"100% 100%",
              height:400,width:500,
              flexGrow:.5,
              borderRadius:15
              }}/>
            <div className="flex" style={{flexGrow:1}}/>
          </div>
          <div id={styles.title}>
            <h1 className="m-4 p-2">{recipe.title}</h1>
          </div>
          <div className="flex m-4" id={styles.first_section}>
            <p>{recipe?.description}</p>
          </div>
        </>}
        </>
    )
}

export default TitleSection;