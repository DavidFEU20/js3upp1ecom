import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCat } from '../store/actions/productCat';
import ProductCard from '../components/products/ProductCard';

const Products = () => {

    const dispatch = useDispatch();
    const productCat = useSelector(state => state.productCat.set)

    useEffect(() => {
        dispatch(getProductCat())
      }, [dispatch])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        productCat && productCat.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
    </div>
    )
}

export default Products
