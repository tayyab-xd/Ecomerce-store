import React,{createContext,useEffect,useReducer, useState} from "react";
import { reducer } from "../reducer/cartReducer";

const CartContext=createContext()

const localCartData=()=>{
    let cartData=localStorage.getItem('Tayyab')
    if (!cartData) {
        return []
    }else{
        return JSON.parse(cartData)
    }
}

const initialState={
    cart:localCartData(),
    totalAmount:'',
    totalItems:'',
    shippingFee:500
}

const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart=(Color,quantity,id,data)=>{
        dispatch({type:'addToCart',payload:{Color,quantity,id,data}})
    }
    const deleteFunc=(id)=>{
        dispatch({type:'deleteFunc',payload:id})
    }
    const clearCart=()=>{
        dispatch({type:'clearCart'})
    }
    // loacal Storage 
    useEffect(() => {
        localStorage.setItem('Tayyab',JSON.stringify(state.cart))
    }, [state.cart])
    const [quantity, setQuantity] = useState(1)

    return(
    <CartContext.Provider value={{...state,addToCart,deleteFunc,clearCart,quantity}}>{children}</CartContext.Provider>
    )
}

export {CartContext,CartProvider}