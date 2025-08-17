import React from "react";

type Props = {
    title:string,
    link:string
}

const PageLinks = ({title,link}:Props) => {
    return(
        <a href={link} id="links">
            <div>
                {title}
            </div>
        </a>
    )
}

export default PageLinks;