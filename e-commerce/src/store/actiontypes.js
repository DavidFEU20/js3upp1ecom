const actiontypes = () => {
    return {
        productCat: {
            set: 'SET_PRODUCT_CAT',
            product: 'GET_ONE_PRODUCT'
        },
        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            delete: 'DELETE_PRODUCT'
          }
    }
}

export default actiontypes