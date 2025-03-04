  import MyImage from '../components/MyImage'
  import AddToCart from '../components/AddToCart'
  import Header from '../components/Header'
  import React from 'react'
  import Colors from '../components/Colors'
  import Star from '../components/Star'
  import { NavLink } from 'react-router-dom'
  import { useEffect,useContext } from 'react'
  import { useParams } from 'react-router-dom'
  import FormatPricing from '../components/FormatPricing'
  import { AppContext } from '../context/productContext'
  import { MdSecurity } from "react-icons/md";
  import { TbTruckDelivery, TbReplace } from "react-icons/tb";

  const SingleProduct = () => {
    const context = useContext(AppContext)
    const data=context.singleProduct
    // console.log(data)
    const {id}=useParams()
    
    useEffect(() => {
      context.getSingleData(`https://api.pujakaitem.com/api/products?id=${id}`)
    }, [])
    
    return (
      <div>
        <Header/>
        <NavLink to='/'>Home</NavLink>/{data.name}
          <div className="grid grid-two-column">
            <div className="product_images">
              <MyImage imgs={data.image} />
            </div>

            
            <div className="product-data">
              <h2>{data.name}</h2>
              {/* <Star stars={data.stars}/>{data.stars} */}
              <p>{data.reviews} reviews</p>
              <p className="product-data-price">
                MRP:
                <del>
                  <FormatPricing price={data.price + 250000} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPricing price={data.price} />
              </p>
              {/* <p>{data.description}</p> */}
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Thapa Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {data.stock > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {data.id} </span>
                </p>
                <p>
                  Brand :<span> {data.company} </span>
                </p>
                <hr/>
                <AddToCart data={data}/>
                
                <p>

                </p>
              </div>
            </div>
          </div>
      </div>
    )
  }

  export default SingleProduct
