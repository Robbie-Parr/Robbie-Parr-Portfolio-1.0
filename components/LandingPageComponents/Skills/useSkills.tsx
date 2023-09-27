import React,{useEffect, useState} from "react";

import store from "@/Redux/store";


const useSkills = () => {
    const [skills,setSkills] = useState([{name:"1",image:"ProfilePicture032.png"}]);

    useEffect(() => {
        setSkills([...store.getState().skills])
    },[]);

    return skills;
}

export default useSkills;