import React, { useState,useContext, use } from "react";
import { CartContext } from "../context/cartContext";
import ToggleAmount from "./ToggleAmount";

function AddTocart({ data }) {
    const contex=useContext(CartContext)
    const addToCart=contex.addToCart
    const selectColor = data.colors
    const id=data.id

    const [Color, setColor] = useState(selectColor ? selectColor[0] : "");
    const [quantity, setQuantity] = useState(1)
    const increament = () => {
        setQuantity(quantity==data.stock?(quantity):quantity+1)
    }
    const decreament = () => {
        setQuantity(quantity==1?1:quantity-1)
    }

    return (
        <>
            <div className="color-container">
                {selectColor ? (
                    selectColor.map((item, index) => (
                        <button
                            key={index}
                            className={`color-button ${Color === item ? "selected" : ""}`}
                            style={{ backgroundColor: item }}
                            onClick={() => setColor(item)}
                        >
                            {Color === item && <span className="checkmark">✔</span>}
                        </button>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="cart-quantity">
                <ToggleAmount data={data} quantity={quantity} increament={increament}decreament={decreament} />
            </div>
            {/* <NavLink to={'/cart'}> */}
            <button onClick={()=>addToCart(Color,quantity,id,data)} className="add-to-cart">Add to Cart</button>
            {/* </NavLink> */}
        </>
    );
}

export default AddTocart;
