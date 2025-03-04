import React, { createContext,useEffect,useReducer } from "react";
const API='https://api.pujakaitem.com/api/products'
const AppContext = createContext()
import { productReducer } from "../reducer/productReducer";

const initialState={
    loading:false,
    singleLoading:false,
    error:false,
    singleError:false,
    products:[],
    singleProduct:{},
    featureProducts:[],
}

const AppProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(productReducer,initialState)

    const getData=async()=>{
        dispatch({type:'loading'})
        try {
            const response=await fetch(API)
            const data=await response.json()
            dispatch({type:'API_Data',payload:data})
            // console.log(data)
        } catch (error) {
            dispatch({type:'error'})
        }
    }
    useEffect(() => {
      getData()
    }, [])

    const getSingleData=async(URL)=>{
        dispatch({type:'singleLoading'})
        try {
            const response=await fetch(URL)
            const data=await response.json()
            dispatch({type:'singleProduct',payload:data})
        } catch (error) {
            dispatch({type:'singleError'})
        }
    }
    

    return (
        <AppContext.Provider value={{ ...state,getSingleData }}>{children}</AppContext.Provider>
    )

}

export { AppContext, AppProvider }

