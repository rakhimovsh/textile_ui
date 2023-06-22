import './RecommendedProducts.css'
import ProductItem from "src/components/ProductItem/ProductItem.jsx";


const RecommendedProducts = () => {
    return (
        <section className='recommended-products'>
            <div className='container'>
                <h2 className='recommended-products__title'>
                    Рекомендуемые
                </h2>
                <div className='recommended-products__list'>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </section>
    )
}

export default RecommendedProducts