import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
const Header = () => {
    const context=useContext(CartContext)
    console.log(context.cart.length)
    return (
        <div>
            
            <nav className="navbar">
                <div className="logo">
                    <NavLink to='/'>
                        <img src="/public/logo.png" alt="Logo" />
                    </NavLink>
                </div>

                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                </ul>

                <div className="cart">
                    <NavLink to='/cart'>
                        <img className='cartPic' src="/public/cart.png" alt="" />
                        <p className="cart-count">{context.cart.length}</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
