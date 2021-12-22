import React, { useEffect, useRef, useState } from "react";
import { ProductImgSliderContainer } from "./ProductImgSliderStyle";

export default function ProductImgSlider() {
    const images = [
        {
            id: 1,
            url: `https://picsum.photos/1000?random=1`,
        },
        {
            id: 2,
            url: `https://picsum.photos/1000?random=2`,
        },
        {
            id: 3,
            url: `https://picsum.photos/1000?random=3`,
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
    },[images.length]);

    const handleSelectedImageChange = (newIdx) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
        }
    };
    return (
        <ProductImgSliderContainer>
            <div
                className="selected-image"
                style={{ backgroundImage: `url(${selectedImage?.url})` }}
            />
            <div className="carousel">
                <div className="carousel__images">
                    {images &&
                        images.map((image, idx) => (
                            <div
                                onClick={() => {
                                    handleSelectedImageChange(idx);
                                }}
                                style={{ backgroundImage: `url(${image.url})` }}
                                key={image.id}
                                className={`carousel__image ${
                                    selectedImageIndex === idx &&
                                    "carousel__image-selected"
                                }`}
                                ref={(el) =>
                                    (carouselItemsRef.current[idx] = el)
                                }
                            />
                        ))}
                </div>
            </div>
        </ProductImgSliderContainer>
    );
}
