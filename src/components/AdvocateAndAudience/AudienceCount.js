import React from 'react';
import '../../styles/AudienceCount.css';
import countDesktop from '../../assets/audience_count/countDesktop.png';
import countMobile from '../../assets/audience_count/countMobile.png';

const AudienceCount = () => {

  return (
    <div className="aud-count-page">
      <div className="aud-count-container">
        <img  src={countDesktop} alt="audience-count" className="countDesktop" />
        <img  src={countMobile} alt="audience-count-mobile" className="countMobile" />
      </div>
    </div>
  );
};

export default AudienceCount;
