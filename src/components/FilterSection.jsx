import React ,{useContext} from 'react'
import { FilterContext } from '../context/filterContext'

function FilterSection() {
    const data=useContext(FilterContext)
    // const func=data.searchfunc
    const {
        allProducts,
        filters:{text,price,minPrice,maxPrice},
        filterFunc,
        clearFilter
    }=data
    
    const getUniquedata=(data,property)=>{
        let newVal=data.map((item)=>item[property])
        newVal=["All",...new Set(newVal)]
        if (property=='colors') {
            return [...new Set([].concat(...newVal))]
            // newVal=newVal.flat()
        }
        return newVal
    }
    const uniqueCategory=getUniquedata(allProducts,"category")
    const company=getUniquedata(allProducts,"company")
    const colors=getUniquedata(allProducts,"colors")
    console.log()
    return (
        <>
        <div className='fixed'>
            <div className="filter-group">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input placeholder='Search' name='text' type="text" value={text} onChange={(e)=>filterFunc(e)} />
                </form>
                <h3>Category</h3>
                <ul>
                    {uniqueCategory?uniqueCategory.map((item,i)=><li key={i}>
                        <button 
                            onClick={(e)=>filterFunc(e)}
                            value={item}
                            name='category'
                        >{item}</button></li>):<p>Loading..</p>}
                </ul>
            </div>

            <div className="filter-group">
                <h3>Company</h3>
                <select onChange={filterFunc} name='company'>
                    {company?company.map((item,i)=><option  
                    key={i} 
                    value={item}
                    >{item}</option>):<p>Loading...</p>}
                </select>
            </div>

            <div className="filter-group">
                <h3>Colors</h3>
                <div className="color-options">
                    {colors.map((item,i)=><span
                    key={i} 
                    onClick={(e)=>filterFunc({ target: { name: 'color', value: item } })} 
                    name='color'
                    className="color-box" 
                    style={{backgroundColor:item}}>{data.filters.color===item?<p style={{color:'white'}}>✔️</p>:''}</span>)}
                </div>
            </div>

            <div className="filter-group">
                        <h3>Price</h3>
                        <span>Rs {price}</span>
                        <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={(e)=>filterFunc(e)}/>
                    </div>
            <button onClick={clearFilter} className="clear-filter">Clear Filters</button>
            </div>
        </>
    )
}

export default FilterSection
