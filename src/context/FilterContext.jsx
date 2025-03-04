import React,{ createContext,useContext, useEffect, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { AppContext } from "./productContext";

const FilterContext=createContext()

const intialState={
    filterProducts:[],
    allProducts:[],
    gridView:true,
    listView:false,
    sortValue:'',
    filters:{
        text:'',
        category:"All",
        company:"All",
        color:'All',
        maxPrice:60000,
        minPrice:0,
        price:6000000
    }
}

const FilterProvider=({children})=>{
    const {products}=useContext(AppContext)
    const [state, dispatch] = useReducer(filterReducer, intialState)
    // console.log(state)

    // for initial product api
    useEffect(() => {
        dispatch({type:'loadProducts',payload:products})
    }, [products])

    const gridViewFunc=()=>{
        dispatch({type:'gridView'})
    }
    const listViewFunc=()=>{
        dispatch({type:'listView'})
    }

    // for checking what sort user wants
    const sorting=()=>{
        dispatch({type:'sorting'})
    }
    // for sorting
    useEffect(() => {
      dispatch({type:'sort',payload:products})
    }, [state.sortValue])
    
    // for filter section 
    const filterFunc=(e)=>{
        const name=e.target.name
        const value=e.target.value
        dispatch({type:'filtersection',payload:{name,value}})
    }
    const clearFilter=()=>{
        dispatch({type:'clearFilter',payload:products})
    }
    useEffect(() => {
        dispatch({type:'searchFilter'})    
    }, [state.filters])
    
    

    return(
    <FilterContext.Provider value={{...state,gridViewFunc,listViewFunc,sorting,filterFunc,clearFilter}}>
        {children}
    </FilterContext.Provider>)
}

export {FilterContext,FilterProvider}