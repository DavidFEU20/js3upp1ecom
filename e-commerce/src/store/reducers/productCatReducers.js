import actiontypes from '../actiontypes'

const initState = {
    set: null,
    product: null
};

const productCatReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productCat.set:
            return {
                ...state,
                set: action.payload
            }
        case actiontypes().productCat.product:
            return {
                ...state,
                product: action.payload
              } 
            
        default:
            return state
    }
}

export default productCatReducer;