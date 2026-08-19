import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data";
import { logEvent } from "../analytics";
import ExperienceDetailPanel from "./ExperienceDetailPanel";
import ExperienceBubbles from "./ExperienceBubbles";

const cardStyles = {
  "Snydex Platforms": {
    gradient: "bg-gradient-to-br from-sky-600 to-cyan-400",
    border: "border-sky-300",
    shadow: "shadow-[0_20px_70px_rgba(14,165,233,0.2)]",
    accent: "#38bdf8",
  },
  "Flatiron Health": {
    gradient: "bg-gradient-to-br from-indigo-700 to-violet-500",
    border: "border-violet-300",
    shadow: "shadow-[0_20px_70px_rgba(139,92,246,0.2)]",
    accent: "#a78bfa",
  },
  Arizent: {
    gradient: "bg-gradient-to-br from-amber-700 via-amber-500 to-yellow-400",
    border: "border-amber-300",
    shadow: "shadow-[0_20px_70px_rgba(245,158,11,0.24)]",
    accent: "#fbbf24",
  },
  Freelance: {
    gradient: "bg-gradient-to-br from-emerald-700 to-teal-500",
    border: "border-emerald-300",
    shadow: "shadow-[0_20px_70px_rgba(16,185,129,0.2)]",
    accent: "#34d399",
  },
  "Rutgers University": {
    gradient: "bg-gradient-to-br from-red-800 to-rose-600",
    border: "border-red-300",
    shadow: "shadow-[0_20px_70px_rgba(239,68,68,0.2)]",
    accent: "#f87171",
  },
};

const defaultDetailTheme = {
  gradient: "bg-gradient-to-br from-slate-700 to-slate-500",
  border: "border-white/20",
  shadow: "shadow-2xl",
  accent: "#94a3b8",
};

const transitionPhrases = [
  "Building products from the ground up",
  "Turning research into reliable systems",
  "Shipping software at editorial scale",
  "Learning through independent work",
  "Where the foundation took shape",
];

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hoverTimerRef = useRef(null);
  const selectedExperience = experiences[selectedIndex];
  const selectedTheme =
    cardStyles[selectedExperience.company_name] || defaultDetailTheme;
  const [ref] = useInView({ threshold: 0.1 });

  const handleSelectExperience = (experience, index, shouldLog = false) => {
    window.clearTimeout(hoverTimerRef.current);
    setSelectedIndex(index);

    if (shouldLog) {
      logEvent("Experience", "Select", experience.title);
    }
  };

  const handleHoverExperience = (experience, index) => {
    window.clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = window.setTimeout(() => {
      handleSelectExperience(experience, index);
    }, 300);
  };

  const cancelHoverSelection = () => {
    window.clearTimeout(hoverTimerRef.current);
  };

  useEffect(() => () => window.clearTimeout(hoverTimerRef.current), []);

  return (
    <div className="relative isolate overflow-hidden">
      <ExperienceBubbles />

      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 pb-16 pt-16 sm:px-8 lg:px-12">
      <motion.div ref={ref}>
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
          The path so far
        </p>
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Experience
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-slate-400 sm:text-base">
          Hover over a role to follow the work, the growth, and the systems I’ve built along the way.
        </p>
      </motion.div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(290px,0.8fr)_minmax(0,1.65fr)] lg:gap-12">
        <div className="pointer-events-auto relative" aria-label="Career timeline">
          <div className="absolute bottom-5 left-[7px] top-5 w-px bg-gradient-to-b from-sky-400/70 via-white/15 to-red-400/60" />

          {experiences.map((experience, index) => {
            const isSelected = selectedIndex === index;
            const theme = cardStyles[experience.company_name] || defaultDetailTheme;

            return (
              <React.Fragment key={`${experience.company_name}-${experience.title}`}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onMouseEnter={() => handleHoverExperience(experience, index)}
                  onMouseLeave={cancelHoverSelection}
                  onFocus={() => handleSelectExperience(experience, index)}
                  onClick={() => handleSelectExperience(experience, index, true)}
                  className={`group relative block w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 ${
                    isSelected
                      ? "translate-x-2 border-white/15 bg-white/[0.08] shadow-xl"
                      : "border-transparent bg-transparent hover:translate-x-1 hover:border-white/[0.08] hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`absolute -left-[1px] top-6 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#050816] transition-all duration-300 ${
                      isSelected ? "scale-125" : "scale-75 opacity-60 group-hover:scale-100"
                    }`}
                    style={{ backgroundColor: theme.accent }}
                  />
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors group-hover:text-slate-300">
                    {experience.date}
                  </span>
                  <span className={`mt-1 block text-base font-semibold transition-colors sm:text-lg ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {experience.title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">
                    {experience.company_name}
                  </span>
                </button>

                {index < transitionPhrases.length && (
                  <div className="relative flex min-h-14 items-center pl-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600 sm:text-[11px]">
                      {transitionPhrases[index]}
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="pointer-events-auto lg:sticky lg:top-24">
          <ExperienceDetailPanel
            selectedExperience={selectedExperience}
            selectedTheme={selectedTheme}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
