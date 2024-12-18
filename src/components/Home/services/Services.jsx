import React from 'react';
import './Services.css';
import image1 from "../../../assets/1.png";
import image2 from "../../../assets/2.png";
import image3 from "../../../assets/3.png";
import image4 from "../../../assets/4.png";
import image5 from "../../../assets/5.png";

const ServiceSection = () => {
  const services = [
    { id: 1, name: 'Track', imageUrl: image1 },
    { id: 2, name: 'Analyze', imageUrl: image2 },
    { id: 3, name: 'Train', imageUrl: image3 },
    { id: 4, name: 'Connect', imageUrl: image4 },
    { id: 5, name: 'Challenge', imageUrl: image5 }
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <p>GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.</p>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.imageUrl} alt={service.name} />
            <div className="service-name">{service.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
