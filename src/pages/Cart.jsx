import React, { useContext } from 'react'
import Header from '../components/Header'
import { CartContext } from '../context/cartContext'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const context = useContext(CartContext)
  const data = context.cart
  const deleteFunc = context.deleteFunc
  const clearCart = context.clearCart

  // 🔹 Calculate Subtotal
  const subtotal = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // 🔹 Shipping Fee (only if cart is not empty)
  const shippingFee = data.length !== 0 ? 500 : 0;

  // 🔹 Calculate Total
  const total = subtotal + shippingFee;

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        <div className="cart-items">
          {data.length > 0 ? data.map((item, i) => (
            <div key={i} className="cart-item">
              <NavLink to={`/singleproduct/${item.id}`}>
                <img src={item.image} alt="Product Image" className="item-image" />
              </NavLink>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-color">Color: <span className="color-box color-button" style={{ backgroundColor: `${item.Color}` }}></span></p>
                Quantity: {item.quantity}
              </div>
              <p className="item-price">Rs {item.price}</p>
              <p className="item-subtotal">Subtotal: Rs {item.price * item.quantity}</p>
              <button onClick={() => deleteFunc(item.id)} className="delete-btn">🗑️</button>
            </div>
          )) : <p>Your cart is empty</p>}
        </div>

        <div className="cart-summary">
          <p>Total Items: <span className="summary-value">{data.length}</span></p>
          <p>Subtotal: <span className="summary-value">Rs {subtotal.toFixed(2)}</span></p>
          <p>Shipping Fee: <span className="summary-value">Rs {shippingFee.toFixed(2)}</span></p>
          <p className="order-total">Total: <span className="summary-value">Rs {total.toFixed(2)}</span></p>
          <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
