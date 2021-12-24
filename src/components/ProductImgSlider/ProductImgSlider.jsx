import React, { useState } from "react";
import { ProductImgSliderContainer } from "./ProductImgSliderStyle";

export default function ProductImgSlider({ images }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

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
                    style={{ backgroundImage: `url(${selectedImage})` }}
                />
            </div>
            <div className="carousel">
                <div className="carousel__images">
                    {images &&
                        images.map((imageUrl, idx) => (
                            <div
                                onClick={() => {
                                    handleSelectedImageChange(idx);
                                }}
                                key={idx}
                                className={`carousel__image ${
                                    selectedImageIndex === idx &&
                                    "carousel__image-selected"
                                }`}
                            >
                                <div
                                    className="ImgContainer"
                                    style={{
                                        backgroundImage: `url(${imageUrl})`,
                                    }}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </ProductImgSliderContainer>
    );
}
