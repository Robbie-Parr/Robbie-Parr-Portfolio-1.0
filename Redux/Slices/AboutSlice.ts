import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name:"about",
    initialState: {
        images:[],
        text:[]
    },
    reducers:{
        updateAbout: (state,action) => {
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
            fetchData(process.env.API_URL+"/About").then(({text,images}) => {
                state.text=text;
                state.images=images;
            })
        }
    }
})

export default aboutSlice;