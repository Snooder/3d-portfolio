import React, { useEffect, useState } from "react";
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { useEggContext } from "../context/EggContext";
import ProgressEgg from "./progressEgg";
import ProgressButton from "./progressButton";
import ProgressVideo from "./ProgressVideo";
import useCopyEmail from "../hooks/useCopyEmail";
import { FallingEggs } from "./SectionAmbientEffects";

const navigationLinks = [
  { label: "Home", url: "#hero" },
  { label: "Experience", url: "#experience" },
  { label: "GitHub", url: "#github" },
  { label: "Designs", url: "#designs" },
  { label: "Events", url: "#events" },
  { label: "Contact", url: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    detail: "/in/mattcsnyder",
    url: "https://www.linkedin.com/in/mattcsnyder/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    detail: "@snooder",
    url: "https://github.com/snooder",
    icon: FaGithub,
  },
  {
    label: "Email",
    detail: "Copy email address",
    copyable: true,
    icon: FaEnvelope,
  },
];

const scrollWithinPortfolio = (element) => {
  const wrapper = document.querySelector(".wrapper");
  if (!wrapper) return;
  wrapper.scrollTo({
    top: wrapper.scrollTop + element.getBoundingClientRect().top - 60,
    behavior: "smooth",
  });
};

const ProgressEggHunt = () => {
  const { eggsFound } = useEggContext();
  const { copied, copyEmail } = useCopyEmail();
  const eggColors = ["white", "green", "red", "blue", "purple", "yellow"];
  const tooltips = [
    { label: "Hero", url: "#hero" },
    { label: "Experience", url: "#experience" },
    { label: "Designs", url: "#designs" },
    { label: "GitHub", url: "#github" },
    { label: "Events", url: "#events" },
    { label: "Contact", url: "#contact" },
  ];

  const [startAnimation, setStartAnimation] = useState(false);
  const [showPrizeButton, setShowPrizeButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const allEggsFound = eggsFound.length === eggColors.length;
  const progressPercent = Math.round((eggsFound.length / eggColors.length) * 100);

  useEffect(() => {
    if (allEggsFound) setShowPrizeButton(true);
  }, [allEggsFound]);

  useEffect(() => {
    const animationTimer = window.setTimeout(() => setStartAnimation(true), 100);
    return () => window.clearTimeout(animationTimer);
  }, []);

  const handlePrizeButtonClick = () => {
    setShowVideo(true);
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setIsVideoPlaying(false);
  };

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <FallingEggs />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-4 sm:px-8 lg:px-12">
        <footer className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#070b16] px-6 py-7 shadow-[0_20px_70px_rgba(0,0,0,0.3)] sm:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.75fr_1fr] lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
                Matt Snyder Portfolio
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Did you find all six eggs?
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                A small challenge for curious visitors. Six eggs are hidden throughout the portfolio, and this banner tracks your progress. Cheating is completely okay.
              </p>

              <div className="mt-5 max-w-md">
                <div className="mb-2 flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-400">Hunt progress</span>
                  <span className="text-amber-300">{eggsFound.length} of {eggColors.length} found</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-[width] duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <nav aria-label="Footer navigation">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Explore
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-1">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.url}
                    smooth
                    to={item.url}
                    scroll={scrollWithinPortfolio}
                    className="group flex items-center justify-between text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="text-slate-700 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300">›</span>
                  </Link>
                ))}
              </div>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Connect
              </p>
              <div className="mt-4 grid gap-2">
                {socialLinks.map(({ label, detail, url, icon: Icon, copyable }) => {
                  const LinkElement = copyable ? "button" : "a";
                  return (
                  <LinkElement
                    key={label}
                    type={copyable ? "button" : undefined}
                    href={copyable ? undefined : url}
                    target={copyable ? undefined : "_blank"}
                    rel={copyable ? undefined : "noopener noreferrer"}
                    onClick={copyable ? copyEmail : undefined}
                    aria-live={copyable ? "polite" : undefined}
                    className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2.5 text-left transition-all hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.07] text-slate-300 transition-colors group-hover:text-amber-300">
                      {copyable && copied ? <FaCheck aria-hidden="true" className="text-emerald-400" /> : <Icon aria-hidden="true" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-slate-200 group-hover:text-white">{copyable && copied ? "Copied!" : label}</span>
                      <span className="block truncate text-[10px] text-slate-500">{copyable && copied ? "Email address copied" : detail}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-700 transition-colors group-hover:text-amber-300">{copyable ? (copied ? "✓" : "+") : "↗"}</span>
                  </LinkElement>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-5" aria-label="Egg hunt scoreboard">
              {eggColors.map((color, index) => (
                <ProgressEgg
                  key={color}
                  color={color}
                  tooltip={tooltips[index]}
                  found={eggsFound.includes(color)}
                  startAnimation={startAnimation}
                  size={30}
                />
              ))}
            </div>
            {showPrizeButton && <ProgressButton onClick={handlePrizeButtonClick} />}
          </div>

          <div className="relative mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>Built by Matt Snyder</span>
            <span>Full stack engineering, AI infrastructure, and product design</span>
          </div>
        </footer>
      </div>
      </div>

      {showVideo && (
        <ProgressVideo
          onClose={handleCloseVideo}
          onVideoStart={() => setIsVideoPlaying(true)}
          onVideoEnd={() => setIsVideoPlaying(false)}
          isPlaying={isVideoPlaying}
        />
      )}
    </>
  );
};

export default ProgressEggHunt;
