import React from 'react'
import { NavLink } from 'react-router-dom'

function ListView({ props }) {
    return (
        <div>
            <NavLink to={`/SingleProduct/${props.id}`}>

            <div className="product-card-list">
                <img
                    src={props.image}
                    alt={props.name}
                    className="product-image"
                    />
                <div className="product-info">
                    <h2 className="product-name">{props.name}</h2>
                    <p className="product-description">
                        Description
                    </p>
                    <p><strong>Company:</strong> {props.company}</p>
                    <p><strong>Price:</strong> {props.price}</p>
                    <div className="product-colors">
                        
                    </div>
                </div>
            </div>
                    </NavLink>
        </div>
    )
}

export default ListView
