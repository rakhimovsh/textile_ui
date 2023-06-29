import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";

import MaterialImg from 'src/assets/images/material-img.jpg'
import TShirtImg from 'src/assets/images/t-shirt-img.jpg'
import HoodieImg from 'src/assets/images/hoodie-img.jpg'
import ShortsImg from 'src/assets/images/shorts-img.jpg'
import './Catalog.css'


const Catalog = () => {
    const navigate = useNavigate()
    const [imageStyle, setImageStyle] = useState({});
    const wrapperRef_1 = useRef(null)
    const wrapperRef_2 = useRef(null)
    const wrapperRef_3 = useRef(null)
    const wrapperRef_4 = useRef(null)
    const handleTextHover = (e, index) => {
        const refs = [wrapperRef_1, wrapperRef_2, wrapperRef_3, wrapperRef_4]
        const rect = refs[index - 1].current.getBoundingClientRect();
        const x = e.clientX - rect.left - 220; // get cursor position
        const y = e.clientY - rect.top - 80;
        setImageStyle({[index]: {left: x, top: y, display: 'block'}});
    };
    const handleMouseLeave = (index) => {
        setImageStyle({[index]: {display: 'none'}}); // update image style to hide it
    };
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
                    <li ref={wrapperRef_1} className='catalog__item' onClick={() => navigate('products')}
                        onMouseMove={(evt) => handleTextHover(evt, '1')}
                        onMouseLeave={() => handleMouseLeave("1")}>
                        <div>
                            <span>
                            01
                        </span>
                            <h3>
                                Материалы
                            </h3>
                            <p>
                                24895 продуктов
                            </p>
                        </div>
                        <img
                            src={MaterialImg}
                            alt="hover image"
                            style={imageStyle['1']}
                            className="hover-image"
                        />
                    </li>
                    <li ref={wrapperRef_2} className='catalog__item' onClick={() => navigate('products')}
                        onMouseMove={(evt) => handleTextHover(evt, '2')}
                        onMouseLeave={() => handleMouseLeave("2")}>
                        <div>
                            <span>
                            02
                        </span>
                            <h3>
                                Футболки
                            </h3>
                            <p>
                                24895 продуктов
                            </p>
                        </div>
                        <img
                            src={TShirtImg}
                            alt="hover image"
                            style={imageStyle['2']}
                            className="hover-image"
                        />
                    </li>
                    <li ref={wrapperRef_3} className='catalog__item' onClick={() => navigate('products')}
                        onMouseMove={(evt) => handleTextHover(evt, '3')}
                        onMouseLeave={() => handleMouseLeave("3")}>
                        <div>
                            <span>
                            03
                        </span>
                            <h3>
                                Худи
                            </h3>
                            <p>
                                24895 продуктов
                            </p>
                        </div>
                        <img
                            src={HoodieImg}
                            alt="hover image"
                            style={imageStyle['3']}
                            className="hover-image"
                        />
                    </li>
                    <li ref={wrapperRef_4} className='catalog__item' onClick={() => navigate('products')}
                        onMouseMove={(evt) => handleTextHover(evt, '4')}
                        onMouseLeave={() => handleMouseLeave("4")}>
                        <div>
                            <span>
                            04
                        </span>
                            <h3>
                                Шорты
                            </h3>
                            <p>
                                24895 продуктов
                            </p>
                        </div>
                        <img
                            src={ShortsImg}
                            alt="hover image"
                            style={imageStyle['4']}
                            className="hover-image"
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Catalog