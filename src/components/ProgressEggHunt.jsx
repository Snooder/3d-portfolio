import React, { useState, useEffect } from "react";
import { useEggContext } from "../context/EggContext";
import ProgressEgg from "./progressEgg";
import ProgressButton from "./progressButton";
import ProgressVideo from "./ProgressVideo";

const ProgressEggHunt = () => {
  const { eggsFound } = useEggContext();
  const eggColors = ["white", "yellow", "green", "red", "blue", "purple"];
  const tooltips = [
    { label: "Hero", url: "#hero" },
    { label: "Contact", url: "#contact" },
    { label: "Experience", url: "#experience" },
    { label: "Designs", url: "#designs" },
    { label: "GitHub", url: "#github" },
    { label: "Events", url: "#events" },
  ];

  const [startAnimation, setStartAnimation] = useState(false);
  const [showPrizeButton, setShowPrizeButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const allEggsFound = eggsFound.length === eggColors.length;

  useEffect(() => {
    if (allEggsFound) {
      setShowPrizeButton(true);
    }
  }, [allEggsFound]);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 100);
  }, []);

  const handlePrizeButtonClick = () => {
    setShowVideo(true);
    handleVideoStart(); // Start the video when the prize button is clicked
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    handleVideoEnd();
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#090e1d]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(251,191,36,0.14),transparent_55%)]" />

          <div className="relative text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
              Hidden feature
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Can you find all the eggs?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              I&apos;ve tucked six eggs away somewhere on this site. I won&apos;t say where; that&apos;s the fun part. This grid is just your scoreboard, not a map. Go poke around, and if honest effort isn&apos;t really your style, I hear there might be a way to cheat.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center gap-10 border-t border-white/10 pt-8">
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
              {eggColors.map((color, index) => (
                <ProgressEgg
                  key={index}
                  color={color}
                  tooltip={tooltips[index]}
                  found={eggsFound.includes(color)}
                  startAnimation={startAnimation}
                />
              ))}
            </div>

            {showPrizeButton && <ProgressButton onClick={handlePrizeButtonClick} />}
          </div>
        </div>
      </div>


      {/* Video Overlay */}
      {showVideo && (
        <ProgressVideo
          onClose={handleCloseVideo}
          onVideoStart={handleVideoStart}
          onVideoEnd={handleVideoEnd}
        />
      )}
    </>
  );
};

export default ProgressEggHunt;
