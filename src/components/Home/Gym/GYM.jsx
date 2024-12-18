/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import './GYM.css';
import gymimg from "../../../assets/gym/gym1.png";
import gymimg2 from "../../../assets/gym/gym2.png";
import gymimg3 from "../../../assets/gym/gym3.png";

// Example gym data
const gyms = [
  { id: 1, name: 'Gym A', phone: '123-456-7890', location: 'Afzalgunj, Hyderabad', lat: 40.748817, lng: -73.985428, image: gymimg },
  { id: 2, name: 'Gym B', phone: '234-567-8901', location: 'Nerul, Navi Mumbai, Maharashtra, 400706', lat: 40.748217, lng: -73.984428, image: gymimg2 },
  { id: 3, name: 'Gym C', phone: '345-678-9012', location: '2801 14th St NW, Washington, DC 20009', lat: 40.747817, lng: -73.986428, image: gymimg3 },
  { id: 4, name: 'Gym D', phone: '456-789-0123', location: 'Nerul, Navi Mumbai', lat: 40.748817, lng: -73.985428, image: gymimg },
  { id: 5, name: 'Gym E', phone: '567-890-1234', location: 'Location B', lat: 40.748217, lng: -73.984428, image: gymimg2 },
  { id: 6, name: 'Gym F', phone: '678-901-2345', location: 'Location C', lat: 40.747817, lng: -73.986428, image: gymimg3 },
];

const GymContainer = () => {
  // Set the first gym as the default active gym
  const [activeGym, setActiveGym] = useState(gyms[0]);

  const handleGymClick = (gym) => {
    setActiveGym(gym);
  };

  return (
    <div className='main-gym'>
      <div className='gym-text2'>
        <h2>Find Your Nearest Gym</h2>
        <p className='gui'>Easily discover gyms near your location to kickstart your fitness journey today!</p>
      </div>

      <div className="gym-container">
        {/* Gym List */}
        <div className="gym-list">
          <div className="gyms">
            {gyms.map((gym) => (
              <div
                key={gym.id}
                className={`gym-item ${activeGym && activeGym.id === gym.id ? 'active' : ''}`}
                onClick={() => handleGymClick(gym)}
              >
                <div className="gym-info">
                  <div className='gym-image'>
                    <img src={gym.image} alt="gym" />
                  </div>
                  <div className='gym-text'>
                    <h3>{gym.name}</h3>
                    <p>{gym.phone}</p>
                    <p>{gym.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map iframe */}
        {activeGym && (
          <div className="gym-map">
            <iframe
              width="100%"
              height="500px"
              frameBorder="0"
              src={`https://www.google.com/maps?q=${activeGym.lat},${activeGym.lng}&hl=es;z=14&output=embed`}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default GymContainer;
