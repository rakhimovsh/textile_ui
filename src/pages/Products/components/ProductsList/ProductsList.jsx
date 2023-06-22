import './ProductsList.css'
import ProductItem from "src/components/ProductItem/ProductItem.jsx";
import Breadcrumb from "src/pages/Products/components/Breadcrumb/Breadcrumb.jsx";




const ProductsList = () =>{
    return (
        <section className='products-list_'>
            <div className='container products-list__container'>
                <ul className='products__category-list'>
                    <li className='products__category-item'>Все</li>
                    <li className='products__category-item'>Материалы</li>
                    <li className='products__category-item'>футболка</li>
                    <li className='products__category-item'>шорты</li>
                    <li className='products__category-item'>платьи</li>
                    <li className='products__category-item'>носки</li>
                    <li className='products__category-item'>майки</li>
                </ul>
                <div className='grid'>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </section>
    )
}

export default ProductsList