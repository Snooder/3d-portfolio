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
            className="pointer-events-auto relative flex items-center gap-5 overflow-hidden rounded-2xl border border-yellow-300/60 bg-[linear-gradient(135deg,rgba(92,68,4,0.98),rgba(39,31,5,0.98)_52%,rgba(20,18,8,0.98))] p-6 shadow-[0_0_32px_rgba(250,204,21,0.5),0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 18% 20%, rgba(253, 224, 71, 0.42), transparent 44%), radial-gradient(circle at 88% 82%, rgba(245, 158, 11, 0.2), transparent 48%)',
              }}
            />

            <div className="pointer-events-none absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-yellow-100/20" />

            <span
              className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-yellow-200/70 bg-yellow-300/20 shadow-[0_0_28px_rgba(253,224,71,0.48)]"
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
