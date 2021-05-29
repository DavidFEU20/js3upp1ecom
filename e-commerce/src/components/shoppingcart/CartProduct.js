import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cart' 

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation();
    dispatch(addToCart(product))
  }

  const remove = e => {
    e.stopPropagation();
    dispatch(removeFromCart(product._id))
  }

  const del = e => {
    e.stopPropagation();
    dispatch(deleteProduct(product._id))
  }

  return (
    <div>

        <div className="cart-item">
        <div className="p-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <img src={product.img} alt="" className="img-fluid image-width"/>
            </div>
            <div>
            <div><strong> {product.title} </strong></div>
            <div><small> {product.quantity} x {product.price}  </small></div>
            </div>
            <div>
        <div className="btn-group btn-group-sm me-2" role="group" area-label="quantity">
            <button className="btn btn-light"  onClick={remove}>-</button>
            <button className="btn btn-light" onClick={add}>+</button>
        </div>
        <button className="btn btn-gray btn-sm " onClick={del}><i className="fas fa-trash"></i></button>
        </div>
        </div>
        <div className="dropdown-divider"></div>
        </div>
    </div>

  )
}

export default CartProduct;
