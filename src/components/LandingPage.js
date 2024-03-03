import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import Map from "../assets/Map.png";
import getearlypass from "../assets/getearlypass.png";
import CountdownTimer from './CountDownTimer';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <ConferenceDetails />
      <div className='conference'>
        <img src={Map} alt="tetris" className="maharashtra-image" />
        <img src={Map} alt="maharashtra" className="maharashtra-image-mobile" />
        <div className='socials'>
          <a href="https://konfhub.com/dfn2023/" className="register-button" target="_blank" rel="noopener noreferrer">
            <img src={getearlypass} alt="getearlypass" className="getearlypass" />
          </a>
        </div>
      </div>
    </div>
    
  );
};

const ConferenceDetails = () => {
  const [revealText, setRevealText] = useState('');
  const [isRevealing, setIsRevealing] = useState(true);

  useEffect(() => {
    const textToReveal = 'Developer Conference';
    let index = 0;

    const revealInterval = setInterval(() => {
      if (isRevealing) {
        setRevealText(textToReveal.substring(0, index));
        index++;

        if (index > textToReveal.length) {
          setIsRevealing(false);
        }
      } else {
        setRevealText(textToReveal);

        setTimeout(() => {
          setIsRevealing(true);
          setRevealText('');
          index = 0;
        }, 2000);
      }
    }, 100); 

    return () => clearInterval(revealInterval);
  }, [isRevealing]);


  return (
    <div>
      <div className="info-container">
        <p className="line-1">Central India's Largest <span>🍊</span></p>
        <Link to="https://gdg.community.dev/gdg-nagpur/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' , color:'white'}}>
            <p className="line-2">
              <span className="red-color">&lt;&lt;</span> 
              {revealText}
            </p>
          </Link>
          <Link to="https://gdg.community.dev/gdg-nagpur/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <p className="line-3">Saturday, 30th December 2023</p>
        </Link>
        <div className="timer-container">
        <CountdownTimer />
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
