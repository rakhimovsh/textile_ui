import {useEffect, useState, useRef} from "react";

import {ReactComponent as RightIcon} from "src/assets/images/right-icon.svg";
import {ReactComponent as LeftIcon} from "src/assets/images/left-icon.svg";
import './Carousel.css'

const Carousel = ({images= []}) =>{
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState();
    const carouselItemsRef = useRef([]);

    useEffect(() => {
        if (images && images[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                images.length
            );

            setSelectedImageIndex(0);
            setSelectedImage(images[0]);
        }
    }, [images]);

    const handleSelectedImageChange = (newIdx) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
        }
    };

    const handleRightClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex + 1;
            if (newIdx >= images.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex - 1;
            if (newIdx < 0) {
                newIdx = images.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };
    return (
        <div className='carousel__container'>
            <div
                className="selected-image"
                style={{ backgroundImage: `url(${selectedImage?.url})` }}
            />
            <div className="carousel">
                <div className="carousel__images">
                    {images &&
                        images.map((image, idx) => (
                            <div
                                onClick={() => handleSelectedImageChange(idx)}
                                style={{ backgroundImage: `url(${image.url})` }}
                                key={image.id}
                                className={`carousel__image ${
                                    selectedImageIndex === idx && "carousel__image-selected"
                                }`}
                                ref={(el) => (carouselItemsRef.current[idx] = el)}
                            />
                        ))}
                </div>
                <button
                    className="carousel__button carousel__button-left"
                    onClick={handleLeftClick}
                >
                    <LeftIcon/>
                </button>
                <button
                    className="carousel__button carousel__button-right"
                    onClick={handleRightClick}
                >
                    <RightIcon/>
                </button>
            </div>
        </div>
    )
}


export default Carousel