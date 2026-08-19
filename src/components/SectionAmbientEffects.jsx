import React, { useEffect, useRef, useState } from "react";
import { FaCog, FaHammer, FaScrewdriver, FaWrench } from "react-icons/fa";

const useSectionPaused = () => {
  const containerRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden",
  );

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

  return { containerRef, paused: !sectionVisible || !pageVisible };
};

const eggColors = ["#f8fafc", "#facc15", "#4ade80", "#f87171", "#60a5fa", "#c084fc"];

const fallingEggs = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: (index * 43 + 5) % 101,
  size: 15 + ((index * 13) % 20),
  duration: 6 + ((index * 7) % 7),
  delay: -((index * 11) % 13),
  sway: -42 + ((index * 19) % 84),
  color: eggColors[index % eggColors.length],
}));

export const FallingEggs = () => {
  const { containerRef, paused } = useSectionPaused();

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      data-eggs-paused={paused ? "true" : "false"}
    >
      {fallingEggs.map((egg) => (
        <span
          key={egg.id}
          className="falling-egg"
          style={{
            left: `${egg.left}%`,
            width: egg.size,
            height: Math.round(egg.size * 1.28),
            backgroundColor: egg.color,
            "--egg-duration": `${egg.duration}s`,
            "--egg-delay": `${egg.delay}s`,
            "--egg-sway": `${egg.sway}px`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/55 via-transparent to-[#050816]/55" />
    </div>
  );
};

const tools = [FaHammer, FaWrench, FaCog, FaScrewdriver];
const floatingTools = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  Icon: tools[index % tools.length],
  left: (index * 31 + 4) % 96,
  top: (index * 47 + 8) % 92,
  size: 18 + ((index * 9) % 22),
  duration: 5 + ((index * 5) % 7),
  delay: -((index * 7) % 10),
  color: index % 2 ? "#34d399" : "#38bdf8",
}));

export const RotatingTools = () => {
  const { containerRef, paused } = useSectionPaused();

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      data-tools-paused={paused ? "true" : "false"}
    >
      {floatingTools.map(({ id, Icon, ...tool }) => (
        <span
          key={id}
          className="rotating-tool"
          style={{
            left: `${tool.left}%`,
            top: `${tool.top}%`,
            color: tool.color,
            "--tool-duration": `${tool.duration}s`,
            "--tool-delay": `${tool.delay}s`,
          }}
        >
          <Icon size={tool.size} />
        </span>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,8,22,.08),rgba(5,8,22,.6)_88%)]" />
    </div>
  );
};
