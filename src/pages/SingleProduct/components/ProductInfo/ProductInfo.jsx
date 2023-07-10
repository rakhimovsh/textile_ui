import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "src/components/Carousel/Carousel.jsx";
import Button from "src/components/Button/Button.jsx";
import { ReactComponent as ArrowRight } from "src/assets/images/arrow-right.svg";
import { ReactComponent as CarIcon } from "src/assets/images/car-icon.svg";
import { ReactComponent as ShieldIcon } from "src/assets/images/shield-icon.svg";
import { ReactComponent as ListIcon } from "src/assets/images/list-icon.svg";
import './ProductInfo.css'
import useFetch from "src/hooks/useFetch.js";


const ProductInfo = () => {
    const { productId } = useParams()
    const [images, setImages] = useState();
    const navigate = useNavigate()
    const { data } = useFetch('/products/' + productId + "/")

    useEffect(() => {
        setImages(
            Array.from(Array(5).keys()).map((id) => ({
                id: id + 1,
                url: data && data[`image_${id + 1}`]
            }))
        );
    }, [data]);
    const handleClick = () => {
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ block: "end" })
            }
        }, 0);
    }
    return (
        <section>
            <div className='container product-info__container'>
                <div className="carousel-wrapper">
                    <Carousel images={images} />
                </div>
                <div className='product-info__desc'>
                    <h2>{data?.name}</h2>
                    <ul className='product-info__list'>
                        <li>Состав: {data?.composition}</li>
                        <li>Плотность: {data?.weight} г/м²</li>
                        <li>Ширина: {data?.width} см</li>
                        <li>Длина за кг: {data?.length_per_kg} м/кг</li>
                        <li>Минимальный заказ: {data?.minimum_order}</li>
                        <li>Срок поставки: {data?.delivery_time} дней</li>
                    </ul>
                    <ul className='product-info__delivery-info-list'>
                        <li><CarIcon /> Быстрая доставка</li>
                        <li><ShieldIcon /> Гарантия качества</li>
                        <li><ListIcon /> 50% авансовый платёж, остаток <br /> при получении</li>
                    </ul>
                    <Button color='black' onClick={handleClick}>заказать <ArrowRight className='product-info__btn-icon' /></Button>
                </div>
            </div>
        </section>
    )
}


export default ProductInfo