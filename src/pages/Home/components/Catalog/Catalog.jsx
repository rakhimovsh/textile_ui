import './Catalog.css'
import {useNavigate} from "react-router-dom";


const Catalog = () => {
    const navigate = useNavigate()
    return (
        <section className='catalog'>
            <div className='container catalog__container'>
                <div>
                    <h2 className='catalog__title'>Каталог продуктов</h2>
                    <p className='catalog__desc'>
                        Magic Materials — производитель текстиля и фурнитуры из Китая с доставкой по всей РФ и странам
                    </p>
                </div>
                <ul className='catalog__list'>
                    <li className='catalog__item' onClick={() => navigate('products')}>
                        <span>
                            01
                        </span>
                        <h3>
                            Материалы
                        </h3>
                        <p>
                            24895 продуктов
                        </p>
                    </li>
                    <li className='catalog__item' onClick={() => navigate('products')}>
                        <span>
                            02
                        </span>
                        <h3>
                            Футболки
                        </h3>
                        <p>
                            24895 продуктов
                        </p>
                    </li>
                    <li className='catalog__item' onClick={() => navigate('products')}>
                        <span>
                            03
                        </span>
                        <h3>
                            Худи
                        </h3>
                        <p>
                            24895 продуктов
                        </p>
                    </li>
                    <li className='catalog__item' onClick={() => navigate('products')}>
                        <span>
                            04
                        </span>
                        <h3>
                            Шорты
                        </h3>
                        <p>
                            24895 продуктов
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Catalog