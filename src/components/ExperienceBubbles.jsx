import React, { useEffect, useRef, useState } from "react";

const ambientBubbles = Array.from({ length: 42 }, (_, index) => ({
  id: `ambient-${index}`,
  left: `${(index * 37 + 9) % 101}%`,
  top: `${(index * 53 + 7) % 108}%`,
  size: 22 + ((index * 19) % 66),
  duration: 11 + ((index * 7) % 17),
  delay: -((index * 11) % 24),
  drift: -46 + ((index * 23) % 92),
}));

const Bubble = ({ bubble, spawned = false, onComplete }) => (
  <span
    className={spawned ? "experience-bubble experience-bubble--spawned" : "experience-bubble"}
    style={{
      left: bubble.left,
      top: bubble.top,
      width: bubble.size,
      height: bubble.size,
      "--bubble-duration": `${bubble.duration}s`,
      "--bubble-delay": `${bubble.delay}s`,
      "--bubble-drift": `${bubble.drift}px`,
    }}
    onAnimationEnd={spawned ? onComplete : undefined}
  >
    <span className="experience-bubble__shine" />
  </span>
);

const ExperienceBubbles = () => {
  const [spawnedBubbles, setSpawnedBubbles] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden",
  );
  const nextId = useRef(0);
  const containerRef = useRef(null);

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

  const createBubble = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const size = 38 + Math.round(Math.random() * 48);
    const bubble = {
      id: `spawned-${nextId.current += 1}`,
      left: `${event.clientX - bounds.left - size / 2}px`,
      top: `${event.clientY - bounds.top - size / 2}px`,
      size,
      duration: 5.5 + Math.random() * 2,
      delay: 0,
      drift: -35 + Math.random() * 70,
    };

    setSpawnedBubbles((current) => [...current.slice(-18), bubble]);
  };

  const removeBubble = (id) => {
    setSpawnedBubbles((current) => current.filter((bubble) => bubble.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 cursor-crosshair overflow-hidden"
      onPointerDown={createBubble}
      aria-hidden="true"
      data-bubbles-paused={!sectionVisible || !pageVisible ? "true" : "false"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(14,165,233,.08),transparent_30%),radial-gradient(circle_at_82%_68%,rgba(45,212,191,.07),transparent_32%)]" />

      {ambientBubbles.map((bubble) => (
        <Bubble key={bubble.id} bubble={bubble} />
      ))}

      {spawnedBubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          bubble={bubble}
          spawned
          onComplete={() => removeBubble(bubble.id)}
        />
      ))}
    </div>
  );
};

export default ExperienceBubbles;
