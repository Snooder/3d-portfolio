import React from 'react';
import useEggHoverAnimation from './useEggHoverAnimation';
import EggComponent from './EggComponent';

const JiggleSpinComponent = ({ children, shadowColor = "rgba(255, 215, 0, 0.8)", eggColor = "yellow" }) => {
  const {
    hovering,
    animationComplete,
    eggVisible,
    handleMouseEnter,
    handleMouseLeave,
  } = useEggHoverAnimation();

  return (
    <div className="relative h-auto flex items-center">
      <div
        className={`relative h-auto ${hovering ? "jiggle-animation" : ""} ${
          animationComplete ? "spin-animation" : ""
        }`} // Apply jiggle and spin animations
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ filter: hovering ? `drop-shadow(0 0 20px ${shadowColor})` : 'none' }} // Dynamic shadow color
      >
        {children}
      </div>

      {/* Egg animation */}
      {eggVisible && (
        <EggComponent
          eggVisible={eggVisible}
          eggColor={eggColor}
          position={{
            marginLeft: '50%', // Positioning egg above the text
            marginRight: '50%', // Center horizontally
          }}
        />
      )}

      <style jsx>{`
        @keyframes jiggle {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(10px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .jiggle-animation {
          animation: jiggle 0.5s ease infinite;
        }

        .spin-animation {
          animation: spin 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JiggleSpinComponent;
