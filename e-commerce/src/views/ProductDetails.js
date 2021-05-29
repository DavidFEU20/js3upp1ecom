import { useEffect } from 'react';
import { addToCart } from '../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, setProduct } from '../store/actions/productCat';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const id = useParams().id
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProduct(id))
    
        return () => {
          dispatch(setProduct(null))
        }
    
      }, [dispatch, id])

      const product = useSelector(state => state.productCat.product);

    return (
        <div>
            {
                product ?
                <div class="container my-5 py-5 z-depth-1">


                {/* <!--Section: Content--> */}
                <section class="text-center">

                    {/* <!-- Section heading --> */}
                    <h3 class="font-weight-bold mb-5">Product Details</h3>

                    <div class="row">

                    <div class="col-lg-6">

                        
                        {/* <!--Slides--> */}
                        <div class="carousel-inner text-center text-md-left" role="listbox">
                            <div class="carousel-item active">
                            <img src={product.img}
                                alt="First slide" class="img-fluid"/>
                            </div>
                        </div>
                        {/* <!--/.Slides--> */}


                    </div>

                    <div class="col-lg-5 text-center text-md-left">

                        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                        <strong> {product.title} </strong>
                        </h2>
                        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                        <span class="font-weight-bold">
                            <strong> $ {product.price} </strong>
                        </span>
                        </h3>

                        {/* <!--Accordion wrapper--> */}
                        

                        {/* <!-- Accordion card --> */}
                        <div class="card">

                            {/* <!-- Card header --> */}
                            <div class="card-header" role="tab" id="headingOne1">
                            
                                <h5 class="mb-0">
                                Description
                            
                                </h5>
                            
                            </div>

                            {/* <!-- Card body --> */}
                            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                            data-parent="#accordionEx">
                            <div class="card-body">
                                {product.description}
                            </div>
                            </div>
                        </div>
                        

                        
                        {/* <!--/.Accordion wrapper--> */}

                        {/* <!-- Add to Cart --> */}
                        <section class="color">
                        <div class="mt-5">

                            <div class="row mt-3">
                            <div class="col-md-12 text-center text-md-left text-md-right">
                                <button class="btn btn-primary" onClick={() => {
                                dispatch(addToCart(product))
                            }}>
                                <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                            </div>
                            </div>
                        </div>
                        </section>
                        {/* <!-- /.Add to Cart --> */}

                    </div>

                    </div>

                </section>
                {/* <!--Section: Content--> */}


                </div>:
                <div>ops</div>}
        </div>
    )
}

export default ProductDetails
