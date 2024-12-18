import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import testimonial from "../../../assets/testimonial3.jpeg";
import testimonial2 from "../../../assets/testimonial2.jpeg";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonial, // Replace with actual image URLs
    },
    {
      id: 2,
      image: testimonial2, // Replace with actual image URLs
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Switch to the next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Switch to the previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Change the slide automatically every 5 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 5000 ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Update the currentIndex when a bullet is clicked
  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-slider">
        <div className="testimonial-text">
            <h2>Tranformations Made Possible<br></br> With GYMFLUENCER</h2>
        </div>

      <div
        className="testimonial-content"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Dynamically move the slides
          transition: 'transform 0.5s ease-in-out', // Transition on each slide change
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <img
              src={testimonial.image}
              alt={`Testimonial ${index + 1}`}
              className="testimonial-image"
            />
          </div>
        ))}
      </div>

      {/* Slider Controls (Prev & Next Buttons) */}
      <div className="slider-controls">
        <button className="arrow-button left-arrow" onClick={handlePrev}>
          &#8249; {/* Left Arrow */}
        </button>
        <button className="arrow-button right-arrow" onClick={handleNext}>
          &#8250; {/* Right Arrow */}
        </button>
      </div>

      {/* Bullets Below */}
      <div className="bullets">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleBulletClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
