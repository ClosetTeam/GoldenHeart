import React, { useState } from 'react';
import "./newSlider.css"
import img1 from "../../assets/images/someCats.png"
const Slider: React.FC = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const images = [
        img1,
        img1,
        img1,
        img1,
        img1,
    ];

    const nextSlide = () => {
        setCurrentPosition((prev) => Math.min(prev + 1, images.length - 3));
    };

    const prevSlide = () => {
        setCurrentPosition((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="slider-container">
            <button className="arrow left" onClick={prevSlide}>&lt;</button>
            <div className="slider">
                <div
                    className="slides"
                    style={{ transform: `translateX(-${currentPosition * (100 / 2.5)}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default Slider;