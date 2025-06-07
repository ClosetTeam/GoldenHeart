import React, { useState } from "react";
const Slider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{ id: 1, content: "Slide 1" },
		{ id: 2, content: "Slide 2" },
		{ id: 3, content: "Slide 3" },
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div className="slider">
			<div
				className="slides"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide) => (
					<div key={slide.id} className="slide">
						{slide.content}
					</div>
				))}
			</div>
			<button onClick={prevSlide}>Previous</button>
			<button onClick={nextSlide}>Next</button>
			<div className="dots">
				{slides.map((slide, index) => (
					<span
						key={slide.id}
						className={`dot ${index === currentSlide ? "active" : ""}`}
						onClick={() => goToSlide(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default Slider;
