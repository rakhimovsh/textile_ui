import ProductItem from "src/components/ProductItem/ProductItem.jsx";
import useFetch from "src/hooks/useFetch.js";
import './RecommendedProducts.css'


const RecommendedProducts = () => {
    const {data: products} = useFetch('/products/')

    return (
        <section className='recommended-products'>
            <div className='container'>
                <h2 className='recommended-products__title'>
                    Рекомендуемые
                </h2>
                <div className='recommended-products__list'>
                    {
                        products && products?.slice(0, 16)?.map(product => (
                            <ProductItem product={product} key={product?.id}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RecommendedProducts