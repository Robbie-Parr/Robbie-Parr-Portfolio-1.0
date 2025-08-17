import React from "react";

import useImage from "../useImage";

type Props = {
    name:string,
    image:string
}

const Card = ({name,image}:Props) => {
    const imageUrl = useImage(image);
    return(
        <div id="skillcard">
            
            <div style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize:"cover",
                width:"100px",
                height:"100px",
                borderRadius: "50%",
            }}/>
            
            <div style={{
                display: "grid",
                alignContent: "space-evenly",
                paddingLeft:"5%",
                color:"white"
            }}>
                <p>{name}</p>
            </div>
           
        </div>
        
    )
}

export default Card;