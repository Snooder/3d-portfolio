import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { default as img1 } from "../assets/designs/RestuarantIQ-newsletter.png";
import { default as img2 } from "../assets/designs/RestuarantIQ.png";
import { default as img3 } from "../assets/designs/SafeWithSounds.png";
import { default as img4 } from "../assets/designs/SafeWithSounds-Presave.png";
import { default as img5 } from "../assets/designs/RestuarantIQ-services.png";
import { default as img6 } from "../assets/designs/RestuarantIQ-menuanalytics.png";
import { default as img8 } from "../assets/designs/starfetcher_dashboard.png";
import starfetcherMobile from "../assets/starfetcher_mobile.png";

const designs = [
  {
    image: img2,
    secondaryImage: img6,
    secondaryLabel: "Menu analytics experience",
    title: "RestaurantIQ",
    category: "SaaS product",
    description:
      "RestaurantIQ gave me the chance to translate dense operational analytics into a story that felt useful before a visitor ever entered the product. I focused on hierarchy, pacing, and showing the human value behind the data instead of leading with feature lists.",
    accent: "#38bdf8",
  },
  {
    image: img5,
    secondaryImage: img1,
    secondaryLabel: "Newsletter experience",
    title: "RestaurantIQ",
    category: "Service design",
    description:
      "This project was about making a broad service offering feel specific and approachable. I organized the page around the questions an operator would naturally ask, then used restrained visuals to keep every section moving toward a clear next step.",
    accent: "#818cf8",
  },
  {
    image: img1,
    secondaryImage: img6,
    secondaryLabel: "Menu analytics view",
    title: "RestaurantIQ",
    category: "Editorial & data product",
    description:
      "I treated the newsletter as a recurring product rather than a one-off content page, designing a layout built for quick scanning without losing depth. The companion analytics experience carries that same thinking into the data side of the product, organizing dense menu performance numbers around decisions instead of raw figures.",
    accent: "#a78bfa",
  },
  {
    image: img3,
    secondaryImage: img4,
    secondaryLabel: "Release presave experience",
    title: "SafeWithSounds",
    category: "Music platform",
    description:
      "Safe With Sounds let me combine two things I care about: building digital products and creating space for music discovery. I designed the landing experience to feel expressive without competing with the artist, release, or listening action.",
    accent: "#f472b6",
  },
  {
    image: img8,
    secondaryImage: starfetcherMobile,
    secondaryLabel: "Mobile companion view",
    title: "StarFetcher",
    category: "Product dashboard",
    description:
      "StarFetcher was a playful lab for thinking through real-time information. I wanted changing game data to remain readable at a glance, so the interface prioritizes status, hierarchy, and the few actions that matter in the moment.",
    accent: "#fbbf24",
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 28 : -28,
    filter: "blur(5px)",
  }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -20 : 20,
    filter: "blur(4px)",
  }),
};

const DesignsGallery = ({ showNavButtons = true, compact = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeDesign = designs[activeIndex];

  const cycleDesign = (step) => {
    setDirection(step);
    setActiveIndex((currentIndex) =>
      (currentIndex + step + designs.length) % designs.length
    );
  };

  const selectDesign = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      className={`mx-auto w-full pb-20 pt-16 ${
        compact
          ? "max-w-none px-5 sm:px-6 lg:px-6"
          : "max-w-7xl px-5 sm:px-8 lg:px-12"
      }`}
    >
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/80">
          Selected interface work
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Product / Web Designs
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          A closer look at products, campaigns, and digital experiences designed to make complex ideas feel clear.
        </p>
      </motion.header>

      <div className="mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-[#090e1d]/90 shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
        <div className="grid lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.55fr)]">
          <div className="relative flex h-[540px] flex-col overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:h-[720px] lg:border-b-0 lg:border-r">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 0% 0%, ${activeDesign.accent}, transparent 48%)`,
              }}
            />

            <div className="relative flex items-center justify-between">
              <span className="text-xs font-semibold tabular-nums tracking-[0.24em] text-slate-500">
                {String(activeIndex + 1).padStart(2, "0")} / {String(designs.length).padStart(2, "0")}
              </span>
              <span
                className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  borderColor: `${activeDesign.accent}55`,
                  color: activeDesign.accent,
                  backgroundColor: `${activeDesign.accent}12`,
                }}
              >
                {activeDesign.category}
              </span>
            </div>

            <div className="relative flex flex-1 items-center py-10" aria-live="polite">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span
                    className="mb-5 block h-1 w-12 rounded-full"
                    style={{ backgroundColor: activeDesign.accent }}
                  />
                  {activeIndex === 0 ? (
                    <JiggleSpinComponent shadowColor="rgba(255, 0, 0, 0.8)" eggColor="red">
                      <h3
                        className="inline-flex border-l-4 px-4 py-3 text-2xl font-bold leading-tight text-white sm:text-3xl"
                        style={{
                          borderColor: activeDesign.accent,
                          backgroundColor: `${activeDesign.accent}18`,
                          color: activeDesign.accent,
                        }}
                      >
                        {activeDesign.title}
                      </h3>
                    </JiggleSpinComponent>
                  ) : (
                    <h3
                      className="inline-flex border-l-4 px-4 py-3 text-2xl font-bold leading-tight text-white sm:text-3xl"
                      style={{
                        borderColor: activeDesign.accent,
                        backgroundColor: `${activeDesign.accent}18`,
                        color: activeDesign.accent,
                      }}
                    >
                      {activeDesign.title}
                    </h3>
                  )}
                  <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                    {activeDesign.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {showNavButtons && (
              <div className="relative">
                <div className="mb-5 flex gap-2" aria-label="Choose a design">
                  {designs.map((design, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectDesign(index)}
                      aria-label={`View design ${index + 1}: ${design.title}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                        index === activeIndex
                          ? "w-8 bg-white"
                          : "w-3 bg-white/20 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => cycleDesign(-1)}
                    className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                    aria-label="Previous design"
                  >
                    <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => cycleDesign(1)}
                    className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-slate-950 transition hover:bg-violet-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
                    aria-label="Next design"
                  >
                    Next
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative flex min-h-[520px] items-start justify-center overflow-hidden bg-[#050816] p-3 sm:min-h-[640px] sm:p-5 lg:min-h-[720px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.12),transparent_42%)]" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeDesign.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid h-[520px] w-full gap-3 overflow-hidden sm:h-[640px] lg:h-[720px] ${
                  activeDesign.secondaryImage ? "grid-rows-2" : "grid-rows-1"
                }`}
              >
                <figure className="relative min-h-0 overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 shadow-2xl">
                  <img
                    src={activeDesign.image}
                    alt={activeDesign.title}
                    className={`h-full w-full object-top ${
                      activeDesign.secondaryImage ? "object-cover" : "object-contain"
                    }`}
                  />
                  {activeDesign.secondaryImage && (
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                      Primary experience
                    </figcaption>
                  )}
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.04]" />
                </figure>

                {activeDesign.secondaryImage && (
                  <figure className="relative min-h-0 overflow-hidden rounded-[22px] border border-white/10 bg-slate-950 shadow-2xl">
                    <img
                      src={activeDesign.secondaryImage}
                      alt={activeDesign.secondaryLabel}
                      className="h-full w-full object-cover object-top"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                      {activeDesign.secondaryLabel}
                    </figcaption>
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.04]" />
                  </figure>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignsGallery;
