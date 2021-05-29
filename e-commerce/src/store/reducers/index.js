import { combineReducers } from 'redux'

import productCatReducer from './productCatReducers';
import cartReducer from './cartReducer';

export default combineReducers ({
    productCat: productCatReducer,
    cartReducer
})