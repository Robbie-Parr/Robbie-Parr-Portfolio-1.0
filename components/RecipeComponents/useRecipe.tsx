import React, {useEffect, useState } from "react";

import store from "@/Redux/store";
import { RecipeType,createSetCurrentRecipe } from "@/Redux/Actions";


  
const useRecipe = (series:string,id:string) => {
    const [recipe,setRecipe] = useState({
        title:"",
        picture:"",
        description:"",
        ingredients:[""],
        equipment:[""],
        method:[""],
        extra:""
    })

    
  
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("../../api/Recipe",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
              series:series,
              id:id
            })
        })
        if(response.status !==404){
            const responsejson = await (response).json()
            setRecipe(responsejson.data)
            store.dispatch(createSetCurrentRecipe(responsejson.data))
           
        }}
      
      fetchData();

  },[series,id]);



    return {recipe};
}

export default useRecipe;