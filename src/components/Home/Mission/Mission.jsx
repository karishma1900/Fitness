import React, { useEffect, useState } from "react";
import "./Mission.css";

const Counter = ({ target, duration, isPlus = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10); // Smooth increment
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(timer); // Cleanup interval
  }, [target, duration]);

  return (
    <h3>
      {count.toLocaleString()}
      {isPlus ? "+" : "K"}
    </h3>
  );
};

function MissionSection() {
  return (
    <section className="mission">
      <div className="mission-container">
      <h2>Your Fitness,<br /> Our Mission</h2>
      <p className="desc">At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.</p>
      <div className="stats">
        <div>
          <Counter target={463} duration={2000} />
          <p>Workouts logged and progress tracked every month</p>
        </div>
        <div>
          <Counter target={163} duration={2000} />
          <p>Fitness enthusiasts connected through our platform</p>
        </div>
        <div>
          <Counter target={13} duration={2000} isPlus={true} />
          <p>Countries where GymFluencer is making an impact</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default MissionSection;
