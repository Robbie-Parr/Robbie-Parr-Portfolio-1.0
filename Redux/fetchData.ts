const fetchData = async (url:string) => {
    const response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    })
    if(response.status !==404){
        const responsejson = await (response).json()
        return responsejson.data
}}

export default fetchData