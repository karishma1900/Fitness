import React from 'react';
import './People.css';
import testimonial1 from "../../../assets/sliderimage.avif";
import testimonial2 from "../../../assets/sliderimage2.avif";
import testimonial3 from "../../../assets/sliderimage3.avif";
import rating from "../../../assets/star.png";

const testimonialsData = [
  {
    id: 1,
    image: testimonial1,
    rating: 4.5,
    content: "Amazing service, really helped me with everything I needed.",
    author: "John Doe",
    designation: "Software Engineer",
  },
  {
    id: 2,
    image: testimonial2,
    rating: 5.0,
    content: "Highly recommend! Excellent support and very quick response.",
    author: "Jane Smith",
    designation: "Product Manager",
  },
  {
    id: 3,
    image: testimonial3,
    rating: 4.0,
    content: "Good experience overall, would definitely use again.",
    author: "George Johnson",
    designation: "Graphic Designer",
  },
];

const People = () => {
  return (
  <div className='main-people'>
    <div className='people-text'>
        <h2>What People Says</h2>
    </div>
      
    <div className="people-slider">
      <div className="people-container">
        {testimonialsData.concat(testimonialsData).map((testimonial, index) => (
          <div key={index} className="people-item">
            <div className="people-image">
              <img src={testimonial.image} alt={testimonial.author} />
            </div>
            <div className="people-content">
              <div className="rating"><img src={rating} alt="rating" /></div>
              <p className="content">{testimonial.content}</p>
              <div className="author">{testimonial.author}</div>
              <div className="designation">{testimonial.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default People;
