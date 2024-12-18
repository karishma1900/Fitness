import React from "react";
import "./FitnessBenefits.css";
import image8 from "../../../assets/Container.png";
import benefit1 from "../../../assets/benefit1.svg";
import benefit2 from "../../../assets/benefit2.svg";
import benefit3 from "../../../assets/benefit3.svg";
import benefit4 from "../../../assets/benefit4.svg";

function FitnessBenefits() {
  return (
    <section className="fitness-benefits">
      <h2>Discover GymFluencer Benefits</h2>
      <p className="main-class">
        Unlock your full potential with GymFluencer your personal fitness
        partner for progress and motivation
      </p>
      <div className="benefit-container">
        <div className="benefit">
          <div className="benefit-Box">
            <img src={benefit1} alt="benefit"/>
            <h4>Effortless Workout Logging</h4>
            <p>
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>
          <div className="benefit-Box">
          <img src={benefit2} alt="benefit"/>
            <h4>Effortless Workout Logging</h4>
            <p>
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>
        </div>
        <div className="benefit">
            <img src={image8} alt="image8" />
        </div>
        <div className="benefit">
          <div className="benefit-Box">
          <img src={benefit3} alt="benefit"/>
            <h4>Effortless Workout Logging</h4>
            <p>
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>
          <div className="benefit-Box">
          <img src={benefit4} alt="benefit"/>
            <h4>Effortless Workout Logging</h4>
            <p>
              Easily log your workouts and monitor your progress over time with
              our intuitive logging feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FitnessBenefits;
