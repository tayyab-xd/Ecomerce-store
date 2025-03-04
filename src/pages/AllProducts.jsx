import React, { useContext } from 'react'
import { AppContext } from '../context/productContext'
import FilterSection from '../components/FilterSection'
import Product from '../components/Product'
import Sort from '../components/Sort'
import { FilterContext } from '../context/filterContext'
import GridView from '../components/GridView'
import ListView from '../components/ListView'

const AllProducts = () => {
  const context = useContext(AppContext)
  const filterContext = useContext(FilterContext)
  const Products = context.products;
  const data=filterContext.filterProducts
  const grid=filterContext.gridView
  const list=filterContext.listView
  // console.log("grid",grid)
  // console.log("list",list)

  return (
    <>
      <div className="product-page">
        <aside className="filter-section">
          <FilterSection />
        </aside>
        <section className="product-list-section">
        <Sort />
      

        {grid?<GridView props={data}/>:
          data ? data.map((item) => <ListView key={item.id} props={item} />) : null}
              
        
        </section>
      </div>
    </>
  )
}

export default AllProducts
