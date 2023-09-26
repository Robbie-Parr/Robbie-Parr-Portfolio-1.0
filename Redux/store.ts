import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";



const store = configureStore({
    reducer: Reducer
})


export default store;

//Be able to set initial state of store
//Get data from store