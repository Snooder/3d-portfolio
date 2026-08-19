import React from 'react';
import useEggHoverAnimation from './useEggHoverAnimation';
import { useEggContext } from '../context/EggContext'; // Import the Egg context

const JiggleSpinComponent = ({ children, shadowColor = "rgba(255, 215, 0, 0.8)", eggColor = "yellow", noJiggle = false }) => {
  const {
    hovering,
    eggVisible,
    animationComplete,
    handleMouseEnter,
    handleMouseLeave,
    resetHoverState, // Add function to reset hover state
  } = useEggHoverAnimation();

  const { triggerEggAnimation } = useEggContext(); // Get the trigger function from the Egg context

  // Trigger the egg animation on completion of the spin
  React.useEffect(() => {
    if (animationComplete) {
      triggerEggAnimation({ visible: true, color: eggColor }); // Trigger egg animation
      resetHoverState(); // Reset after the animation to allow re-triggering
    }
  }, [animationComplete, triggerEggAnimation, eggColor, resetHoverState]);

  return (
    <div className="relative h-auto flex items-center">
      <div
        className={`relative h-auto ${!noJiggle && hovering ? "jiggle-animation" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          filter: hovering ? `drop-shadow(0 0 ${noJiggle ? '35px' : '20px'} ${shadowColor})` : 'none',
          transform: noJiggle && hovering ? 'scale(1.05)' : undefined,
          transition: 'filter 0.3s ease, transform 0.3s ease',
        }}
      >
        {children}
      </div>

      {/* Egg animation */}
      {eggVisible && (
        <EggComponent
          eggVisible={eggVisible}
          eggColor={eggColor}
        />
      )}

      <style>{`
        @keyframes jiggle-egg {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(0px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .jiggle-animation {
          animation: jiggle-egg 0.5s ease 4; /* Jiggle for 3 seconds (0.5s x 6) */
        }
      `}</style>
    </div>
  );
};

export default JiggleSpinComponent;
