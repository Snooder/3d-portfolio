import React, { useEffect, useRef, useState } from "react";

const paths = [
  "M -120 90 C 210 15 430 170 760 94 S 1210 35 1560 130",
  "M -100 230 C 230 310 430 145 735 235 S 1160 330 1540 220",
  "M -130 380 C 190 300 470 470 760 378 S 1190 290 1570 420",
  "M -90 535 C 250 625 430 445 780 540 S 1190 635 1540 520",
  "M -120 690 C 180 590 470 760 790 680 S 1210 590 1560 720",
  "M -100 835 C 230 910 470 770 790 842 S 1180 920 1540 820",
];

const themes = {
  designs: { primary: "#8b5cf6", secondary: "#22d3ee" },
  events: { primary: "#f59e0b", secondary: "#a78bfa" },
};

const EnergyLinesBackground = ({ variant = "designs" }) => {
  const [sectionVisible, setSectionVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden",
  );
  const containerRef = useRef(null);
  const theme = themes[variant] || themes.designs;
  const paused = !sectionVisible || !pageVisible;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      data-energy-paused={paused ? "true" : "false"}
    >
      <svg className="h-full w-full" viewBox="0 0 1440 930" preserveAspectRatio="none" fill="none">
        <defs>
          <filter id={`energy-glow-${variant}`} x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {paths.map((path, index) => {
          const color = index % 2 ? theme.secondary : theme.primary;
          return (
            <g key={path}>
              <path d={path} stroke={color} strokeWidth="1" opacity=".1" />
              <path
                d={path}
                className="energy-line"
                stroke={color}
                strokeWidth={index % 3 === 0 ? "2" : "1.4"}
                strokeLinecap="round"
                strokeDasharray="90 410"
                opacity=".55"
                filter={`url(#energy-glow-${variant})`}
                style={{
                  "--energy-duration": `${8 + index * 1.8}s`,
                  "--energy-delay": `${-index * 2.1}s`,
                }}
              />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(5,8,22,.36)_78%,rgba(5,8,22,.68)_100%)]" />
    </div>
  );
};

export default EnergyLinesBackground;
