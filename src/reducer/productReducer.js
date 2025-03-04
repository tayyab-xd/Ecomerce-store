const productReducer=(state,action)=>{
    switch (action.type) {
        case 'loading':
            return{
                ...state,
                loading:true,
                error:false
            }
        case 'error':
            return{
                ...state,
                error:true,
                loading:false
            }
        case 'API_Data':
            const feature=action.payload.filter((item)=>{
                return item.featured===true
            })
            return{
                ...state,
                loading:false,
                error:false,
                products:action.payload,
                featureProducts:feature
            }
            case 'singleError':
                return{
                    ...state,
                    singleError:true,
                    singleLoading:false
                }
            case 'singleLoading':
                return{
                    ...state,
                    singleError:false,
                    singleLoading:true
                }
            case 'singleProduct':
                return{
                    ...state,
                    singleError:false,
                    singleLoading:false,
                    singleProduct:action.payload
                }
            
        default:
            return state;
    }
}

export {productReducer}