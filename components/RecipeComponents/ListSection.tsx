import React from "react";

type Props = {
    title:string,
    area?: 1 | 2,
    numbered?: boolean,
    list:string[],
    
}

const ListSection = ({title,list,
                    area=1,numbered=false}:Props) => {
    return(
        <div className={area==1 ? "text_area1" : (area==2 ? "text_area2" : "")}>
            <h2>{title}</h2>
            {list?.map((item,index)=><p key={item}>{numbered ? (index+1)+") " : "- "}{item}</p>)}
        </div>
    )
}

export default ListSection;