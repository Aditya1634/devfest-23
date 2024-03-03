import React from 'react';
import '../styles/Header.css';
import gdg from "../assets/logos/gdg.png"
import devfest from "../assets/logos/devfest.png"

const Header = () => {
  return (
    <div className="header">
      <img src={gdg} alt="gdg-nagpur" className="left-image" />
      <div className="top-right">
        <img src={devfest} alt="devfest-nagpur" className="right-image" />
      </div>
    </div>
  );
};

export default Header;
