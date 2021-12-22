import React, { useEffect, useRef, useState } from "react";
import { ProductImgSliderContainer } from "./ProductImgSliderStyle";

export default function ProductImgSlider() {
    const images = [
        {
            id: 1,
            url: `https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/headphone/n/5/h/mxya2zm-a-beats-original-imafyfkytruddaav.jpeg?q=70`,
        },
        {
            id: 2,
            url: `https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/headphone/r/1/a/mxya2zm-a-beats-original-imafyfkyenp6degz.jpeg?q=70`,
        },
        {
            id: 3,
            url: `https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/headphone/0/c/z/mxya2zm-a-beats-original-imafyfkyj9yvffrf.jpeg?q=70`,
        },
    ];

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
    }, [images.length]);

    const handleSelectedImageChange = (newIdx) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
        }
    };
    return (
        <ProductImgSliderContainer>
            <div className="selected-image">
                <div
                    className="ImgContainer"
                    style={{ backgroundImage: `url(${selectedImage?.url})` }}
                />
            </div>
            <div className="carousel">
                <div className="carousel__images">
                    {images &&
                        images.map((image, idx) => (
                            <div
                                onClick={() => {
                                    handleSelectedImageChange(idx);
                                }}
                                
                                key={image.id}
                                className={`carousel__image ${
                                    selectedImageIndex === idx &&
                                    "carousel__image-selected"
                                }`}
                                ref={(el) =>
                                    (carouselItemsRef.current[idx] = el)
                                }
                            >
                                <div className="ImgContainer" style={{ backgroundImage: `url(${image.url})` }}/>
                            </div>
                        ))}
                </div>
            </div>
        </ProductImgSliderContainer>
    );
}
