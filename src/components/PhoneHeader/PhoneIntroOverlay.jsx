import React, { useEffect, useState } from 'react';
import PhoneHeaderPhone from './PhoneHeaderPhone';

const PhoneIntroOverlay = ({ onClose }) => {
  const getIntroScale = () => {
    if (typeof window === 'undefined') return 1.7;

    const heightScale = (window.innerHeight - 150) / 520;
    const widthScale = (window.innerWidth - 24) / 240;
    return Math.max(1, Math.min(1.7, heightScale, widthScale));
  };

  const [introScale, setIntroScale] = useState(getIntroScale);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const handleResize = () => setIntroScale(getIntroScale());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/80 px-3 backdrop-blur-sm sm:px-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Welcome message"
      >
        <div
          onMouseDown={(event) => event.stopPropagation()}
          className="relative flex flex-col items-center"
        >
          <PhoneHeaderPhone
            revealDelayMs={1800}
            intro
            scale={introScale}
            startExploring={false}
          />

          <div className="relative z-50 mt-6 flex w-full isolate items-center justify-center px-2">
            <button
              type="button"
              onClick={onClose}
              className="relative z-50 w-[min(420px,calc(100vw-32px))] rounded-2xl border-2 border-white bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 px-8 py-5 text-base font-black uppercase tracking-[0.08em] text-white ring-4 ring-sky-300/25 shadow-[0_0_34px_rgba(56,189,248,.85),0_16px_45px_rgba(37,99,235,.55)] transition duration-200 hover:scale-[1.035] hover:brightness-125 hover:shadow-[0_0_48px_rgba(103,232,249,.95),0_18px_52px_rgba(37,99,235,.68)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
              style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', opacity: 1 }}
            >
              <span className="relative z-[60]" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', opacity: 1, textShadow: 'none' }}>
                Start exploring the portfolio
              </span>
            </button>
          </div>
        </div>

        <p className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
          Click outside to continue
        </p>
      </div>
  );
};

export default PhoneIntroOverlay;
