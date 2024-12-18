import React from "react";
import "./Header.css"; // Import the external CSS file
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
       <img src={logo} alt="logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="dropdown">
            <a href="#services" className="service">Our Services <span>&#9662;</span></a>
           <div className="Dropdown">
            <ul className="dropdown-menu">
              <li><a href="/workout-plan">Workout Plan</a></li>
              <li><a href="/diet-plan">Diet Plan</a></li>
            
            </ul>
            </div>
          </li>
          <li><a href="/benefits">Benefits</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta-button">
        <a href="/join" className="join-btn">Join us now</a>
      </div>
    </header>
  );
};

export default Header;
