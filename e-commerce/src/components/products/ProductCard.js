import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    return (
        <div>
                <div className="col hover-shadow">
                    <div className="card h-100">
            <Link to={`/products/${product._id}`}>
                    
                    <img
                        src={product.img}
                        className="card-img-top"
                        alt="..."
                        />

                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text"> {product.description} </p>
                        <p> {product.price} </p>
                    </div>
                    
                            </Link>
                        <div className="mb-3">
                        <div className="col-md-12 text-center text-md-left text-md-right">
                            <button className="btn btn-primary" onClick={() => {
                                dispatch(addToCart(product))
                            }}>
                            <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                        </div>
                        </div>
                    
                    </div>
                </div>
        </div>
    )
}

export default ProductCard
