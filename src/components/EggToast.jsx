import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEgg, FaTimes } from "react-icons/fa";
import { useEggContext } from "../context/EggContext";

const EggToast = () => {
  const { toast, dismissToast } = useEggContext();

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-[1000] w-[calc(100vw-2.5rem)] max-w-xl">
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/15 bg-slate-800/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at 0% 0%, ${toast.color}33, transparent 60%)`,
              }}
            />

            <span
              className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border"
              style={{ backgroundColor: `${toast.color}22`, borderColor: `${toast.color}55` }}
            >
              <FaEgg style={{ color: toast.color }} className="text-6xl drop-shadow-[0_0_18px_rgba(0,0,0,0.4)]" />
            </span>

            <div className="relative flex-1">
              <p
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: toast.color }}
              >
                {toast.eyebrow}
              </p>
              <h4 className="mt-1.5 text-2xl font-bold leading-tight text-white">
                {toast.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
                {toast.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={dismissToast}
              aria-label="Dismiss"
              className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <FaTimes className="text-lg" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EggToast;
