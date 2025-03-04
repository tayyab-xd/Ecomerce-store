import React from 'react'

function ToggleAmount({ quantity, increament, decreament }) {
      return (
    <div className="cart-quantity">
        <button onClick={decreament} className="quantity-btn">-</button>
            <span className="quantity">{quantity}</span>
        <button onClick={increament} className="quantity-btn">+</button>
    </div>
  )
}

export default ToggleAmount
