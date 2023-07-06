import {useNavigate} from "react-router-dom";
import {useState} from "react";

import "aos/dist/aos.css";
import ProductItem from "src/components/ProductItem/ProductItem.jsx";
import Button from "src/components/Button/Button.jsx";
import {ReactComponent as ArrowRight} from 'src/assets/images/arrow-right.svg'
import useFetch from "src/hooks/useFetch.js";
import './Products.css'


const Products = () => {
    
    const navigate = useNavigate()
    const [activeCategory, setActiveCategory] = useState(null)
    const {data: categories} = useFetch('/categories/')
    const {data: products} = useFetch('/products/')
    const onCategoryClicked = (categoryId = null) => {
        setActiveCategory(categoryId ? categoryId : null)
    }

    const sortProducts = () => {
        if (!products) return []
        return products.slice(0, 8).filter(product => {
            let result = true
            if (activeCategory) result = product.category === activeCategory

            return result
        })
    }
    return (
        <section className='products' id='products'>
            <div className='container products__container'>
                <h2 className='products__title'>Наши продукции</h2>
                <ul className='products__category-list'>
                    <li onClick={() => onCategoryClicked()}
                        className={activeCategory === null ? 'products__category-item active' : 'products__category-item'}>Все
                    </li>
                    {
                        categories && categories.map(category => (
                            <li key={category?.id} onClick={() => onCategoryClicked(category?.id)}
                                className={`products__category-item ${activeCategory === category?.id ? ' active' : ''}`}>{category?.name}</li>
                        ))
                    }
                </ul>
                <div className='products-list'>
                    {
                        products && sortProducts().map(product => (
                            <ProductItem   product={product} key={product?.id}/>
                        ))
                    }
                </div>
                <Button onClick={() => navigate('products')} color='black'>Посмотреть все <ArrowRight
                    className='products__btn-icon'/></Button>
            </div>
        </section>
    )
}


export default Products