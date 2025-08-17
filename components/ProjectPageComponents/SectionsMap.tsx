import React from "react";

import useProject from "./useProject";


const SectionsMap = ({id}:{id:string}) => {
    const {node,sections} = useProject(id);

    return(<>
        {(sections).map(
    ({text,image,index}) => {
      if(index%2==0){
      return(
        <div key={index} id="left">
          <img src={image}/>

          <div>
            {(text.split("\\n")).map(i => 
              <p key={i}>{i}</p>
              )}
          </div>
        </div>
      )
      }else{
        return(
        <div key={index} id="right">
          <div>
            {(text.split("\\n")).map(i => 
              <p key={i}>{i}</p>
              )}
          </div>
          
          <img src={image}/>
        </div>)
      }
    })
  }
  </>)

}

export default SectionsMap;