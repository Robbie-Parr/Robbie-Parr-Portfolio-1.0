import React,{useEffect,useState} from "react";

import {imageRequest} from "../../../pages/api/firebase";

const CVLink = () => {
    const [cvLink,setCVLink] = useState("")

    useEffect(() => {
        const result = async () => {
            let res = await imageRequest("CVRobbieParr.pdf")
            setCVLink(res);
        }
        result()
    },[])

    return(
        <a href={cvLink} download>
            <div className="CV_Icon">
                <h2>CV</h2>
            </div>
        </a>
    )
}

export default CVLink;