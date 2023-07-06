import AOS from "aos";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import './ProductItem.css'

const ProductItem = ({product}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const navigate = useNavigate()
    return (
        <div className='products-item' data-aos="flip-left" onClick={() => navigate('/product/' + product?.id)}>
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