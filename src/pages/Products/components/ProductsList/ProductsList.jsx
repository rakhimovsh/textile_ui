import ProductItem from "src/components/ProductItem/ProductItem.jsx";
import './ProductsList.css'
import useFetch from "src/hooks/useFetch.js";
import {useState} from "react";


const ProductsList = () => {
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
        <section className='products-list_'>
            <div className='container products-list__container'>
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
                <div className='grid'>
                    {
                        products && sortProducts().map(product => (
                            <ProductItem product={product} key={product?.id}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductsList