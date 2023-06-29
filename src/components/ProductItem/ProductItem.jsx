import {useNavigate} from "react-router-dom";
import './ProductItem.css'

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='products-item' onClick={() => navigate('/product/' + product?.id)}>
                <img src={'https://picsum.photos/500'} alt='product image'/>
                <div>
                    <h4>
                        {product?.name}
                    </h4>
                    <p>
                        ${product?.price} / 1m²
                    </p>
                </div>
            </div>
            <div className='products-item' onClick={() => navigate('/product/' + product?.id)}>
                <img src={'https://picsum.photos/500'} alt='product image'/>
                <div>
                    <h4>
                        {product?.name}
                    </h4>
                    <p>
                        ${product?.price} / 1m²
                    </p>
                </div>
            </div>
            <div className='products-item' onClick={() => navigate('/product/' + product?.id)}>
                <img src={'https://picsum.photos/500'} alt='product image'/>
                <div>
                    <h4>
                        {product?.name}
                    </h4>
                    <p>
                        ${product?.price} / 1m²
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductItem