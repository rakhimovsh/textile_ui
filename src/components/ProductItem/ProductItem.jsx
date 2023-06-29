import {useNavigate} from "react-router-dom";
import './ProductItem.css'

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    console.log(product)
    console.log(product?.image_1)
    return (
        <div className='products-item' onClick={() => navigate('/product/' + product?.id)}>
            <img src={product?.image_1} alt='product image'/>
            <div>
                <h4>
                    {product?.name}
                </h4>
                <p>
                    ${product?.price} / 1m²
                </p>
            </div>
        </div>
    )
}

export default ProductItem