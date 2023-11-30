import React,{useEffect, useState} from "react";

import {imageRequest} from "../../pages/api/firebase";

const useImage = (image:string) => {
    const [imageUrl,setImageUrl] = useState("");

    useEffect(() => {
        const getImageUrl = async () => {
            if(image==""){
                return;
            }
            let res = await imageRequest(image)
            setImageUrl(res)
        }
        getImageUrl()
    })

    return imageUrl;
}

export default useImage;