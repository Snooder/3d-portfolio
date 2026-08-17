import React from 'react';
import PhoneHeader from './PhoneHeader';

const Hero = ({ active, setActive, phonePaused = false, onPhoneOpen }) => {
  const handleButtonClick = (anchor) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <PhoneHeader onScrollTo={handleButtonClick} phonePaused={phonePaused} onPhoneOpen={onPhoneOpen} />;
};

export default Hero;
