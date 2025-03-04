import React,{useContext} from 'react'
import { FiList, FiGrid } from "react-icons/fi";
import { FilterContext } from '../context/filterContext';

function Sort() {
  const context=useContext(FilterContext)
  const gridView=context.gridViewFunc
  const listView=context.listViewFunc
  const sorting=context.sorting
  // console.log('sortvalue:',context.sortValue)
  // console.log(context.filterProducts)
  return (
    <div>
      <div className="sort-options">
          <div className="view-toggle">
            <button onClick={gridView} className="grid-view"><FiGrid /></button>
            <button onClick={listView} className="list-view"><FiList /></button>
          </div>
          <span className="total-products">Total Products: {context.filterProducts.length}</span>
        <select onClick={sorting} id='sort'>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="a-b">Sort: a to b</option>
          <option value="b-a">Sort: b to a</option>
        </select>
        </div>
    </div>
  )
}

export default Sort
