import React from "react";
import "./Footer.css"; // Import the external CSS file
import logo from "../../assets/logo.svg";
import { FaEnvelope , FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import twitter from "../../assets/twitter x.svg";
const Footer = () => {
  return (
    <footer >
      <div className="footer">
      <div className="logo">
       <img src={logo} alt="logo" />
      </div>
      <div className="footer-text">
        <h2>Where Fitness Meets Social Connection!</h2>

        <div className="email">
        <FaEnvelope size={24} color="white" />
        <a href="#zdg">hello@gym.birlaventures.com</a>

        </div>
        <nav className="navbar-footer">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Diet Plan</a></li>
          
        
          <li><a href="/benefits">Features</a></li>
          <li><a href="/blogs">FAQ's</a></li>
          
        </ul>
      </nav>
      </div>

      <div className="copyright">
        <div className="copy-right">
            <h2>© 2024 GymFluencer. All rights reserved.</h2>
        </div>
        <div className="social-media">
          <a href="#linkedin" className="linkedin">
          <FaLinkedin size={25} color="white" />
          </a>
          <a href="#twitter" className="twitter">
        <img src={twitter} alt="twitter" />
        </a>
        <a href="#instagram" className="instagram">
        <FaInstagram size={25}  color="white" />
        </a>
        </div>
      </div>
      
      </div>
    
    </footer>
  );
};

export default Footer;
