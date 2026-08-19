import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaEgg, FaTimes, FaTrophy } from "react-icons/fa";

const eggColors = ["#f8fafc", "#22c55e", "#ef4444", "#3b82f6", "#a855f7", "#facc15"];
const confettiColors = ["#facc15", "#38bdf8", "#34d399", "#f472b6", "#a78bfa", "#fb923c"];

const ProgressVideo = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setVisible(true);
    document.body.classList.add("prize-video-open");
    window.dispatchEvent(new Event("prize-video-change"));

    const fadeTimer = window.setTimeout(() => setFadeOut(true), 8500);
    const closeTimer = window.setTimeout(onClose, 9200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(closeTimer);
      document.body.classList.remove("prize-video-open");
      window.dispatchEvent(new Event("prize-video-change"));
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[#02040b]"
      style={{
        opacity: fadeOut ? 0 : visible ? 1 : 0,
        transition: "opacity 700ms ease-in-out",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Egg hunt prize animation"
    >
      <div className="prize-celebration-glow absolute h-[70vmin] w-[70vmin] rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_32%),radial-gradient(circle_at_50%_115%,rgba(59,130,246,0.24),transparent_48%)]" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <span
            key={index}
            className="prize-confetti absolute top-[-8%] h-3 w-1.5 rounded-full"
            style={{
              left: `${3 + ((index * 37) % 94)}%`,
              backgroundColor: confettiColors[index % confettiColors.length],
              animationDelay: `${(index % 9) * -0.34}s`,
              animationDuration: `${3.4 + (index % 5) * 0.45}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="prize-trophy relative grid h-28 w-28 place-items-center rounded-full border border-yellow-200/70 bg-yellow-300/15 shadow-[0_0_70px_rgba(250,204,21,0.5)] sm:h-36 sm:w-36">
          <FaTrophy className="text-5xl text-yellow-300 drop-shadow-[0_0_18px_rgba(250,204,21,0.7)] sm:text-7xl" />
        </div>

        <p className="prize-kicker mt-8 text-xs font-black uppercase tracking-[0.4em] text-yellow-300 sm:text-sm">
          Prize unlocked
        </p>
        <h2 className="prize-title mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl">
          You found all six
        </h2>
        <p className="prize-subtitle mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-xl">
          Curiosity wins. Thanks for exploring every corner of the portfolio.
        </p>

        <div className="mt-9 flex items-center justify-center gap-3 sm:gap-5" aria-label="All six eggs found">
          {eggColors.map((color, index) => (
            <span
              key={color}
              className="prize-egg grid h-11 w-11 place-items-center sm:h-14 sm:w-14"
              style={{ animationDelay: `${1.4 + index * 0.16}s` }}
            >
              <span
                className={`prize-egg-dancer grid h-full w-full place-items-center rounded-full border border-white/15 bg-white/[0.06] ${index % 2 ? "prize-egg-dancer--reverse" : ""}`}
                style={{
                  color,
                  animationDelay: `${2.35 + index * 0.18}s`,
                  animationDuration: `${1.65 + (index % 3) * 0.18}s`,
                }}
              >
                <FaEgg className="text-xl sm:text-2xl" />
              </span>
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close prize animation"
        className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:border-white/60 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <FaTimes aria-hidden="true" />
      </button>
    </div>,
    document.body,
  );
};

export default ProgressVideo;
