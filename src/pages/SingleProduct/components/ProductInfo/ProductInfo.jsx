import {useEffect, useState} from "react";
import Carousel from "src/components/Carousel/Carousel.jsx";
import Button from "src/components/Button/Button.jsx";

import {ReactComponent as ArrowRight} from "src/assets/images/arrow-right.svg";
import {ReactComponent as CarIcon} from "src/assets/images/car-icon.svg";
import {ReactComponent as ShieldIcon} from "src/assets/images/shield-icon.svg";
import {ReactComponent as ListIcon} from "src/assets/images/list-icon.svg";
import './ProductInfo.css'


const ProductInfo = () => {
    const [images, setImages] = useState();

    useEffect(() => {
        setImages(
            Array.from(Array(10).keys()).map((id) => ({
                id,
                url: `https://picsum.photos/1000?random=${id}`
            }))
        );
    }, []);
    return (
        <section>
            <div className='container product-info__container'>
                <div className="carousel-wrapper">
                    <Carousel images={images}/>
                </div>
                <div className='product-info__desc'>
                    <h2>Ткани для платьев и рубашек</h2>
                    <ul className='product-info__list'>
                        <li>Состав: полиэстер 100%</li>
                        <li>Плотность: 300 г/м²</li>
                        <li>Ширина: 150 см</li>
                        <li>Длина за кг: 2.2 м/кг</li>
                        <li>Назначение: Для мужской, женской и детской коллекции весна и осень, верхней одежды</li>
                        <li>Минимальный заказ: Товары из наличия — от 1 рулона; товары по заказу — от 6 рулонов</li>
                        <li>Срок поставки: 6–15 дней</li>
                    </ul>
                    <ul className='product-info__delivery-info-list'>
                        <li><CarIcon/> Быстрая доставка</li>
                        <li><ShieldIcon/> Гарантия качества</li>
                        <li><ListIcon/> 50% авансовый платёж, остаток <br/> при получении</li>
                    </ul>
                    <Button color='black'>заказать <ArrowRight className='product-info__btn-icon'/></Button>
                </div>
            </div>
        </section>
    )
}


export default ProductInfo