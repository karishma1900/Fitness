import React from 'react'
import "./Gallery.css"
import fitness from "../../../assets/fitness.avif";
const Gallery = () => {
  return (
    <div className='main-fitness'>
    <div className='fitnesshub'>
        <div className='fitness-conatiner'>
            <div className='fitness-text'>
                <h2>Your Personalized Fitness Hub</h2>
                <p>Personalized workout routines tailored to your goals and preferences</p>
                <p>Get expert guidance with virtual coaching sessions, available anytime, anywhere.

</p>
                <p>Track your fitness journey with detailed analytics, goal setting, and achievements.</p>
            </div>
            <div className='fitness-image'>
                <img src={fitness} alt='fitness' />

            </div>
        </div>

    </div>
    <div className="moving-text3">
    <p>
    Fitness Plans  ·  Workout Routines  ·  Progress Tracking  Fitness Plans  ·  Workout Routines  ·  Progress Tracking  Fitness Plans  ·  Workout Routines  ·  Progress Tracking
    Fitness Plans  ·  Workout Routines  ·  Progress Tracking
    </p>
    </div>
    </div>
   
  )
}

export default Gallery
