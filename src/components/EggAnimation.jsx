import React, { useState, useEffect, useRef } from "react";
import { FaEgg } from "react-icons/fa";
import { useEggContext } from "../context/EggContext";

const TOTAL_EGGS = 6;

const EggAnimation = ({ triggerEgg }) => {
  const [eggVisible, setEggVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const { eggsFound } = useEggContext();
  const { visible, color: eggColor } = triggerEgg;
  const timerRef = useRef(null);

  useEffect(() => {
    if (visible) {
      clearTimeout(timerRef.current);
      setAnimationKey(k => k + 1);
      setEggVisible(true);
      timerRef.current = setTimeout(() => setEggVisible(false), 4000);
    }
  }, [visible]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    // Zero-size container so the egg never affects navbar layout
    <div style={{ position: 'relative', width: 0, height: 0, overflow: 'visible' }}>
      {eggVisible && (
        <div key={animationKey} style={{
          position: 'absolute',
          left: '8px',
          bottom: '24px',
          zIndex: 1000,
          animation: 'egg-fade 4s ease-in-out forwards',
        }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <FaEgg style={{ fontSize: '35px', color: eggColor, display: 'block' }} />
            <span style={{
              position: 'absolute',
              top: '-9px',
              right: '-10px',
              background: 'rgba(0,0,0,0.8)',
              color: 'white',
              fontSize: '9px',
              fontWeight: 'bold',
              borderRadius: '8px',
              padding: '1px 5px',
              whiteSpace: 'nowrap',
              lineHeight: '1.4',
            }}>
              {eggsFound.length}/{TOTAL_EGGS}
            </span>
          </div>
        </div>
      )}
      <style>{`
        @keyframes egg-fade {
          0%   { transform: scale(0.5); opacity: 0; }
          20%  { transform: scale(1);   opacity: 1; }
          80%  { transform: scale(1);   opacity: 1; }
          100% { transform: scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default EggAnimation;
