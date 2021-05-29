import axios from 'axios';
import actiontypes from '../actiontypes';

export const getProductCat = () => {

    return async dispatch => {
        const res = await axios.get('http://localhost:9999/api/products')
        dispatch(setProducts(res.data))
    }
}

export const getProduct = (_id) => {

    return async dispatch => {
        const res = await axios.get(`http://localhost:9999/api/products/${_id}`)
        dispatch(setProduct(res.data))
    }
}

export const setProducts = products => {
    return {
        type: actiontypes().productCat.set,
        payload: products
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().productCat.product,
        payload: product
    }
}