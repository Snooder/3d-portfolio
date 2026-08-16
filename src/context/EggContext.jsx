import React, { createContext, useState, useContext, useRef } from "react";

// Create context
const EggContext = createContext();

const TOTAL_EGGS = 6;

const progressMessages = {
  1: { title: "1 of 6 found", subtitle: "Well done. I'll have to admit the reward is miniscule to the effort, but maybe you can find a way to cheat 😉" },
  2: { title: "2 of 6 found", subtitle: "Way to keep your eyes peeled." },
  3: { title: "3 of 6 found", subtitle: "Halfway there." },
  4: { title: "4 of 6 found", subtitle: "You're on a roll." },
  5: { title: "5 of 6 found", subtitle: "So close now. I wonder if you're cheating..." },
  6: { title: "6 of 6 found!", subtitle: "Nice work, go claim your prize." },
};

export const EggProvider = ({ children }) => {
  // State to manage egg animations
  const [eggAnimation, setEggAnimation] = useState({ visible: false, color: "" });

  // State to manage found eggs
  const [eggsFound, setEggsFound] = useState([]);

  // State to manage the bottom-left toast shown when an egg is found
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);
  const toastIdRef = useRef(0);

  const dismissToast = () => {
    window.clearTimeout(toastTimerRef.current);
    setToast(null);
  };

  const showEggToast = (eyebrow, title, subtitle, color) => {
    window.clearTimeout(toastTimerRef.current);
    toastIdRef.current += 1;
    setToast({ id: toastIdRef.current, eyebrow, title, subtitle, color });
    toastTimerRef.current = window.setTimeout(() => setToast(null), 9000);
  };

  // Trigger egg animation and keep track of found eggs
  const triggerEggAnimation = (eggDetails) => {
    if (!eggAnimation.visible) {
      setEggAnimation({ visible: true, color: eggDetails.color });

      if (!eggsFound.includes(eggDetails.color)) {
        // A genuinely new egg
        const newCount = eggsFound.length + 1;
        setEggsFound((prevEggs) => [...prevEggs, eggDetails.color]);
        const { title, subtitle } = progressMessages[newCount];
        showEggToast("Egg found", title, subtitle, eggDetails.color);
      } else {
        // Already found this one before
        showEggToast(
          "Already found",
          "You've already got this one",
          "Maybe try looking around elsewhere. No shame in cheating 😉",
          eggDetails.color
        );
      }

      // Reset animation visibility after 3 seconds
      setTimeout(() => setEggAnimation({ visible: false, color: eggDetails.color }), 3000);
    }
  };

  return (
    <EggContext.Provider
      value={{ eggAnimation, triggerEggAnimation, eggsFound, toast, dismissToast, TOTAL_EGGS }}
    >
      {children}
    </EggContext.Provider>
  );
};

// Custom hook for using EggContext
export const useEggContext = () => useContext(EggContext);
