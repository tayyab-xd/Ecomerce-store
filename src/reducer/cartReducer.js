export const reducer = (state, action) => {
    if (action.type === 'addToCart') {
        let { Color, quantity, id, data } = action.payload
        let uniqueId = id + Color
        let sameItem = state.cart.find((item) => item.id == id + Color)
        console.log(data.stock)
        if (sameItem) {
            let updatedCart = state.cart.map((item) => {
                if (item.id == uniqueId) {
                    if (item.quantity==data.stock) {
                        return{
                            ...item,
                            quantity:data.stock
                        }
                    }
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                }   
                return item;
            })    
            return{
                ...state,
                cart:updatedCart
            }
        } else {
            const newEntry = {
            id: uniqueId,
            name: data.name,
            image: data.image[0].url,
            price: data.price,
            Color,
            quantity
        }
        return {
            ...state,
            cart: [...state.cart, newEntry]
        }
    }
    }
    if (action.type === 'deleteFunc') {
        const id = action.payload
        console.log(id)
        return {
            ...state,
            cart: [...state.cart.filter((item) => item.id != id)]
        }
    }
    if (action.type == 'clearCart') {
        return {
            ...state,
            cart: []
        }
    }
}

