import React from 'react';
import section from "../../assets/Section.png";
import "./Home.css";
import MovingText from './Movingtext/MovingText';
import MissionSection from './Mission/Mission';
import play from "../../assets/play.png";

import videomp from "../../assets/fitness.mp4";
import ServiceSection from './services/Services';
import FitnessBenefits from './fitness/FitnessBenefit';
import Gallery from './Gallery/Gallery';
import TestimonialSlider from './Testimonial/Testimonial';
import People from './People/People';
import GymContainer from './Gym/GYM';
import BlogContainer from './Blogs/Blog';
import FAQAccordion from './FAQ/FAQ';

const Home = () => {
  return (
 <div className='Home'>
    <div className='main-slider'>
        <img src={section} alt="main-image" />
    </div>
    <MovingText />
    <MissionSection />
    <div className='fitness-video'>
        <div className='video-container'>
        <video width="800" height="450" >
          <source src={videomp} type="video/mp4" />
        </video>
        <div className="play-icon">
          <img src={play} alt="Play Icon" />
        </div>
        </div>
    </div>
    <ServiceSection />
    <FitnessBenefits />
    <Gallery />
    <TestimonialSlider />
   <People />
   <GymContainer />
   <BlogContainer />
    <FAQAccordion />
 </div>
  )
}

export default Home
