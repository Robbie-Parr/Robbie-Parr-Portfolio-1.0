import React,{useEffect, useState} from "react";


const useSkills = () => {
    const [skills,setSkills] = useState([{name:"1",image:"ProfilePicture032.png"}]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("../../../../api/Skills",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            if(response.status !==404){
                const responsejson = await (response).json()
                let result = responsejson.data.map((skill:{id:string,data:{image_url:string}}) => {
                    return {name:skill.id,image: skill.data.image_url}
                })
                setSkills([...result])
            }}
        fetchData();
    },[]);
        console.log(skills)

    return skills;
}

export default useSkills;