import React from "react";
import "../styles/PricingSection.css"
import aeroplane from "../assets/pricing/aeroplane.png";
import getyourpass from "../assets/pricing/getyourpass.png";

const PricingSection = () => {
  return (
    <div className="pricing_container">
        <div className="pricing_intro">
            <h1 className="pricing_header">
                Get the <span className="orange_text">Last Minute</span> pass today!
            </h1>
            <h1 className="pricing_header">₹749</h1>
            <div className="flex-container">
                <li className="list-item">
                    <span className="red-tick">✓</span> Community Lounge Events
                </li>
                <li className="list-item">
                    <span className="red-tick">✓</span> Keynote Sessions
                </li>
                <li className="list-item">
                    <span className="red-tick">✓</span> Panel Discussions
                </li>
                <li className="list-item">
                    <span className="red-tick">✓</span> Hands-on Session
                </li>
                <li className="list-item">
                    <span className="red-tick">✓</span> Food and Beverages
                </li>
                <li className="list-item">
                    <span className="red-tick">✓</span> Swags and Goodies
                </li>
            </div>
            <a href="https://konfhub.com/dfn2023" target="_blank" rel="noopener noreferrer">
                <img src={getyourpass} alt="getyourpass" className="getyourpass" />
            </a>
        </div>
        <img src={aeroplane} alt="aeroplane" className="aeroplane-image" />
    </div>
  );
};

export default PricingSection;
