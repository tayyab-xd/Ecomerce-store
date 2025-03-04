import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import FormatPricing from './FormatPricing'


const Product = ({props}) => {
    // console.log(props.id)
  return (
    <div className='allProduct'>
      <Link to={`/singleproduct/${props.id}`}>
      <div className="card">
        <figure>
          <img src={props.image} alt={props.name} />
          <figcaption className="caption">{props.category}</figcaption>
        </figure>

        <div className="card-data ">
          <div className="card-data-flex">
            <h3>{props.name}</h3>
            <p className="card-data--price">{<FormatPricing price={props.price}/>}</p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Product
