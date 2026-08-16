import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for Email, LinkedIn, and GitHub
import { SectionWrapper } from "../hoc";
import { logEvent } from "../analytics"; // Import logEvent from analytics.js
import JiggleSpinComponent from "./JiggleSpinComponent";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // Universal click handler to track button and link clicks
  const handleLinkClick = (e) => {
    const platform = e.currentTarget.getAttribute("data-platform") || e.currentTarget.innerText;
    logEvent("Contact", "Click", platform); // Log the click with dynamic label
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 0.7, delay: 0.1 },
          },
        }}
      >
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#090e1d]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(52,211,153,0.14),transparent_55%)]" />

          <div className="relative text-center">
            <JiggleSpinComponent shadowColor="rgba(255, 215, 0, 0.8)" eggColor="yellow">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
                Say hello
              </p>
            </JiggleSpinComponent>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Want to get in touch?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Whether it&apos;s a project, an opportunity, or just to say hi, I&apos;d be happy to connect.
            </p>
          </div>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 sm:flex-row">
            <a
              href="mailto:matthew.swe.snyder@gmail.com"
              data-platform="Email Button"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-emerald-100 sm:w-auto"
            >
              <FaEnvelope className="text-base" />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/mattcsnyder/"
              target="_blank"
              rel="noopener noreferrer"
              data-platform="LinkedIn Button"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white sm:w-auto"
            >
              <FaLinkedin className="text-base" />
              Connect on LinkedIn
            </a>
          </div>

          <div className="relative mt-6 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:gap-4">
            <a
              href="https://www.linkedin.com/in/mattcsnyder/"
              target="_blank"
              rel="noopener noreferrer"
              data-platform="LinkedIn Small"
              onClick={handleLinkClick}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <FaLinkedin className="text-sm" />
              /mattcsnyder
            </a>
            <a
              href="https://github.com/snooder"
              target="_blank"
              rel="noopener noreferrer"
              data-platform="GitHub Small"
              onClick={handleLinkClick}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <FaGithub className="text-sm" />
              /snooder
            </a>
            <a
              href="mailto:matthew.swe.snyder@gmail.com"
              data-platform="Email Small"
              onClick={handleLinkClick}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <FaEnvelope className="text-sm" />
              matthew.swe.snyder@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
