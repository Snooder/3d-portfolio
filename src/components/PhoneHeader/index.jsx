import React, { useEffect, useRef, useState } from 'react';
import PhoneHeaderText from './PhoneHeaderText';
import PhoneHeaderPhone from './PhoneHeaderPhone';
import ContactPopup from './ContactPopup';
import InformationPipeline from './InformationPipeline';

const PhoneHeader = ({ onScrollTo, phonePaused = false, onPhoneOpen }) => {
  const [contactOpen, setContactOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [prizeVideoOpen, setPrizeVideoOpen] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === 'undefined' || document.visibilityState !== 'hidden',
  );
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.02 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(document.visibilityState !== 'hidden');
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handlePrizeVideoChange = () => {
      setPrizeVideoOpen(document.body.classList.contains('prize-video-open'));
    };

    handlePrizeVideoChange();
    window.addEventListener('prize-video-change', handlePrizeVideoChange);
    return () => window.removeEventListener('prize-video-change', handlePrizeVideoChange);
  }, []);

  const animationsPaused = phonePaused || contactOpen || prizeVideoOpen || !heroVisible || !pageVisible;

  return (
    <div
      ref={heroRef}
      className="relative isolate flex w-full flex-col items-center justify-center gap-16 overflow-hidden px-8 pt-16 md:flex-row md:px-24"
      style={{
        background: [
          'radial-gradient(circle at 0% 24%, rgba(37, 99, 235, 0.34) 0%, rgba(37, 99, 235, 0.1) 24%, transparent 48%)',
          'radial-gradient(circle at 100% 72%, rgba(16, 185, 129, 0.24) 0%, rgba(14, 116, 144, 0.1) 26%, transparent 50%)',
          'linear-gradient(115deg, #020617 0%, #04132d 48%, #031b2b 100%)',
        ].join(', '),
        minHeight: '100vh',
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{ top: '-120px', left: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: '-100px', right: '200px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      <InformationPipeline paused={animationsPaused} />

      <PhoneHeaderText onScrollTo={onScrollTo} onContactOpen={() => setContactOpen(true)} />
      <PhoneHeaderPhone paused={animationsPaused} inactive onOpen={onPhoneOpen} />

      {contactOpen && <ContactPopup onClose={() => setContactOpen(false)} />}
    </div>
  );
};

export default PhoneHeader;
