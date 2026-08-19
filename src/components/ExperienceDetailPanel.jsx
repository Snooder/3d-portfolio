import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceIcons from "./ExperienceIcons";

const ExperienceDetailPanel = ({ selectedExperience, selectedTheme }) => (
  <div className="min-h-[560px]" aria-live="polite">
    <AnimatePresence mode="wait">
      <motion.article
        key={`${selectedExperience.company_name}-${selectedExperience.title}`}
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={`overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60 ${selectedTheme.shadow}`}
      >
        <header className={`relative overflow-hidden ${selectedTheme.gradient} p-6 sm:p-8`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_42%)]" />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
            {selectedExperience.companyLogo && (
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/95 p-3 shadow-lg sm:h-24 sm:w-24">
                <img
                  src={selectedExperience.companyLogo}
                  alt={`${selectedExperience.company_name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                {selectedExperience.date}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                {selectedExperience.title}
              </h3>
              <p className="mt-2 text-sm text-white/80 sm:text-base">
                {selectedExperience.company_name} · {selectedExperience.location}
              </p>
            </div>
          </div>
        </header>

        <div className="bg-[#0b1020] p-6 sm:p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Selected work &amp; impact
          </p>
          <div className="space-y-3">
            {selectedExperience.icons.map((icon, index) => (
              <motion.div
                key={`${icon.name}-${icon.label}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 + index * 0.045, duration: 0.25 }}
                className="group flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors hover:border-white/[0.12] hover:bg-white/[0.05]"
              >
                <div className="flex-shrink-0">
                  <ExperienceIcons icons={[icon]} className="icon-border" />
                </div>
                <div className="min-w-0">
                  <h4 className="mb-1 text-sm font-semibold text-white">
                    {icon.label}
                  </h4>
                  <p className="text-sm leading-6 text-slate-400 sm:text-[15px]">
                    {icon.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.article>
    </AnimatePresence>
  </div>
);

export default ExperienceDetailPanel;
