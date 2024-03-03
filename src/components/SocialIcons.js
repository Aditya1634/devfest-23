import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SocialIcons.css';
import insta from "../assets/socials/instagram.svg"
import twitter from "../assets/socials/twitter.png"
import linkedin from "../assets/socials/linkedin.svg"

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Link to="https://twitter.com/gdgnagpur_" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="icons" />
      </Link>
      <Link to="https://www.linkedin.com/company/gdgnagpur/mycompany/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="icons" />
      </Link>
      <Link to="https://www.instagram.com/gdgnagpur/" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="Instagram" className="icons" />
      </Link>
    </div>
  );
};

export default SocialIcons;
