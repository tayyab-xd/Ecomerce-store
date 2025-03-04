export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'loadProducts':
            let priceArray = action.payload.map((item) => item.price)
            let maxPrice = Math.max(...priceArray)
            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: {
                    ...state.filters,
                    price: maxPrice,
                    maxPrice: maxPrice
                }
            }
                ;
        case 'gridView':
            return {
                ...state,
                gridView: true,
                listView: false
            }

        case 'listView':
            return {
                ...state,
                listView: true,
                gridView: false,
            }
        case 'sorting':
            const sort1 = document.getElementById('sort')
            const sort2 = sort1.options[sort1.selectedIndex].value
            return {
                ...state,
                sortValue: sort2
            }
        case 'sort':
            const tempData = [...state.filterProducts]
            if (state.sortValue === 'a-b') {
                tempData.sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.sortValue === 'b-a') {
                tempData.sort((a, b) => b.name.localeCompare(a.name));
            } else if (state.sortValue === 'low-high') {
                tempData.sort((a, b) => a.price - b.price);
            } else if (state.sortValue === 'high-low') {
                tempData.sort((a, b) => b.price - a.price);
            }
            return {
                ...state,
                filterProducts: tempData

            }
        case 'filtersection':
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        case "searchFilter":
            let { allProducts } = state
            let tempSearchData = [...allProducts]
            const { text, category, company, color, price } = state.filters
            // console.log(company)
            if (text) {
                tempSearchData = tempSearchData.filter((item) => {
                    return item.name.toLowerCase().includes(text)
                })
            }
            if (category !== 'All') {
                tempSearchData = tempSearchData.filter((item) => {
                    return item.category === category
                })
            }
            if (company !== 'All') {
                tempSearchData = tempSearchData.filter((item) => {
                    return item.company === company
                })
            }
            if (color !== 'All') {
                tempSearchData = tempSearchData.filter((item) => {
                    return item.colors.includes(color)
                })
            }
            if (price && price !== state.filters.maxPrice) {
                tempSearchData = tempSearchData.filter((item) => item.price <= price);
            }

            // console.log('problem:', tempSearchData)
            return {
                ...state,
                filterProducts: tempSearchData
            }
        case 'clearFilter':
            return {
                ...state,
                filterProducts: action.payload
            }
        case 'clearFilter':
            return {
                ...state,
                filterProducts: action.payload,  
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'All',
                    company: 'All',
                    color: '',
                    price: state.filters.maxPrice,  
                }
            };

        default:
            return {
                state
            };
    }
}
