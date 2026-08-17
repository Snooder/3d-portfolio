import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { events } from "../data";
import { logEvent } from "../analytics";
import JiggleSpinComponent from "./JiggleSpinComponent";

const eventAccents = ["#38bdf8", "#818cf8", "#a78bfa", "#f59e0b"];

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 24 : -24 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -18 : 18 }),
};

const EventGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeEvent = events[activeIndex];
  const activeAccent = eventAccents[activeIndex % eventAccents.length];
  const [eventGalleryRef, eventGalleryInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const selectEvent = (index, shouldLog = true) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    if (shouldLog) logEvent("Event Gallery", "Select", events[index].title);
  };

  const cycleEvent = (step) => {
    const nextIndex = (activeIndex + step + events.length) % events.length;
    setDirection(step);
    setActiveIndex(nextIndex);
    logEvent("Event Gallery", "Navigate", step > 0 ? "Next" : "Previous");
  };

  const eventTitle = (
    <h3
      className="border-l-4 px-4 py-3 text-2xl font-bold leading-tight sm:text-3xl"
      style={{
        borderColor: activeAccent,
        backgroundColor: `${activeAccent}14`,
        color: activeAccent,
      }}
    >
      {activeEvent.title}
    </h3>
  );

  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12">
      <motion.header
        ref={eventGalleryRef}
        initial={{ opacity: 0, y: 18 }}
        animate={eventGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
          Beyond the screen
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Events &amp; Community
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          A few moments with the teams, communities, and people that have shaped the work.
        </p>
      </motion.header>

      <div className="mt-12 overflow-hidden border-y border-white/15 bg-[#070b14]">
        <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
          <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 lg:min-h-[620px] lg:border-b-0 lg:border-r">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={activeEvent.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                <figcaption className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                  {activeEvent.location}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex min-h-[500px] flex-col justify-between p-6 sm:p-8 lg:min-h-[620px] lg:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${activeEvent.title}-details`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  <span>Event {String(activeIndex + 1).padStart(2, "0")}</span>
                  <span>{String(events.length).padStart(2, "0")} total</span>
                </div>

                <div className="mt-8">
                  {activeEvent.title === "Flatiron Health | 10 Year Anniversary" ? (
                    <JiggleSpinComponent shadowColor="rgba(128,0,128,0.8)" eggColor="purple">
                      {eventTitle}
                    </JiggleSpinComponent>
                  ) : eventTitle}
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                  {activeEvent.longDescription}
                </p>

                <dl className="mt-8 border-y border-white/10 text-sm">
                  <div className="flex items-center gap-3 border-b border-white/10 py-4">
                    <FaMapMarkerAlt aria-hidden="true" style={{ color: activeAccent }} />
                    <dt className="w-20 text-slate-500">Location</dt>
                    <dd className="text-slate-200">{activeEvent.location}</dd>
                  </div>
                  <div className="flex items-center gap-3 py-4">
                    <FaCalendarAlt aria-hidden="true" style={{ color: activeAccent }} />
                    <dt className="w-20 text-slate-500">Date</dt>
                    <dd className="text-slate-200">{activeEvent.date}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-3">
              <button
                type="button"
                onClick={() => cycleEvent(-1)}
                aria-label="Previous event"
                className="flex h-12 flex-1 items-center justify-center gap-2 border border-white/15 text-sm font-semibold text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                <FaArrowLeft aria-hidden="true" className="text-xs" />
                Previous
              </button>
              <button
                type="button"
                onClick={() => cycleEvent(1)}
                aria-label="Next event"
                className="flex h-12 flex-1 items-center justify-center gap-2 bg-white text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
              >
                Next
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4" aria-label="Choose an event">
          {events.map((event, index) => {
            const isSelected = activeIndex === index;
            const accent = eventAccents[index % eventAccents.length];
            return (
              <button
                key={event.title}
                type="button"
                onClick={() => selectEvent(index)}
                aria-pressed={isSelected}
                className="group flex min-w-0 items-center gap-3 border-b border-r border-white/10 p-3 text-left transition-colors hover:bg-white/[0.04] sm:border-b-0"
              >
                <img src={event.image} alt="" className="h-12 w-12 shrink-0 object-cover" />
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: isSelected ? accent : "#64748b" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`mt-1 block truncate text-xs font-medium ${isSelected ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}>
                    {event.title.replace("Flatiron Health | ", "")}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
