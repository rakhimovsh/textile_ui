import './Products.css'
import ProductItem from "src/components/ProductItem/ProductItem.jsx";
import Button from "src/components/Button/Button.jsx";
import {ReactComponent as ArrowRight} from 'src/assets/images/arrow-right.svg'


const Products = () => {
    return (
        <section className='products'>
            <div className='container'>
                <h2 className='products__title'>Наши продукции</h2>
                <ul className='products__category-list'>
                    <li className='products__category-item'>Все</li>
                    <li className='products__category-item'>Материалы</li>
                    <li className='products__category-item'>футболка</li>
                    <li className='products__category-item'>шорты</li>
                    <li className='products__category-item'>платьи</li>
                    <li className='products__category-item'>носки</li>
                    <li className='products__category-item'>майки</li>
                </ul>
                <div className='products-list'>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
                <Button color='black'>Посмотреть все <ArrowRight className='products__btn-icon'/></Button>
            </div>
        </section>
    )
}


export  default Products