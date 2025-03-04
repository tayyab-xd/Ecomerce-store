import React from 'react'
import Product from './Product'

function GridView({props}) {
    // console.log(props)
    const data=props
  return (
    <div className='product-list'>
      {data ? data.map((item, i) => <Product key={i} props={item} />) : <h1>Loading</h1>}
    </div>
  )
}

export default GridView
