import './ProductItem.css'
import ProductImage from 'src/assets/images/product-image.jpg'

const ProductItem = () => {
    return (
        <div className='products-item'>
            <img src={ProductImage} alt='product image'/>
            <div>
                <h4>
                    Ткани для платьев и рубашек
                </h4>
                <p>
                    $50 / 1m²
                </p>
            </div>
        </div>
    )
}

export default ProductItem