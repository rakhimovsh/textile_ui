import './ProductInfo.css'
import Carousel from "src/components/Carousel/Carousel.jsx";
import {useEffect, useState} from "react";


const ProductInfo = () =>{
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
            <div className='container'>
                <Carousel images={images}/>
            </div>
        </section>
    )
}


export default ProductInfo