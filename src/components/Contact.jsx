import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaCheck, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for Email, LinkedIn, and GitHub
import { logEvent } from "../analytics"; // Import logEvent from analytics.js
import JiggleSpinComponent from "./JiggleSpinComponent";
import useCopyEmail from "../hooks/useCopyEmail";
import { RotatingTools } from "./SectionAmbientEffects";

const Contact = () => {
  const controls = useAnimation();
  const { copied, copyEmail, email } = useCopyEmail();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // Universal click handler to track button and link clicks
  const handleLinkClick = (e) => {
    const platform = e.currentTarget.getAttribute("data-platform") || e.currentTarget.innerText;
    logEvent("Contact", "Click", platform); // Log the click with dynamic label
  };

  return (
    <div className="relative isolate w-full overflow-hidden">
      <RotatingTools />
      <motion.div
        className="relative z-10"
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
        <div className="relative left-1/2 w-screen -translate-x-1/2 border-y border-white/15 bg-white/[0.012] py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-0 lg:px-12">
            <div className="lg:pr-14">
              <JiggleSpinComponent shadowColor="rgba(255, 215, 0, 0.8)" eggColor="yellow">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Available to connect
                </p>
              </JiggleSpinComponent>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Have something worth building?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                I&apos;m interested in thoughtful products, difficult systems, and teams that care about the people using their work.
              </p>
              <p className="mt-8 text-sm text-slate-500">
                Full stack engineering&nbsp;&nbsp;•&nbsp;&nbsp;AI infrastructure&nbsp;&nbsp;•&nbsp;&nbsp;Product engineering
              </p>
            </div>

            <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Contact
              </p>

              <button
                type="button"
                data-platform="Email Primary"
                onClick={(event) => {
                  handleLinkClick(event);
                  copyEmail();
                }}
                aria-live="polite"
                className="group mt-5 flex w-full items-center justify-between border-b border-white/15 pb-5 text-left text-white transition-colors hover:border-emerald-400/60 hover:text-emerald-300"
              >
                <span>
                  <span className="block text-sm text-slate-500">{copied ? "Email copied!" : "Click to copy email"}</span>
                  <span className="mt-1 block text-lg font-medium sm:text-xl">{email}</span>
                </span>
                {copied ? <FaCheck aria-hidden="true" className="ml-4 shrink-0 text-lg text-emerald-400" /> : <FaEnvelope aria-hidden="true" className="ml-4 shrink-0 text-lg" />}
              </button>

              <div className="grid grid-cols-2 border-b border-white/15">
                <a
                  href="https://www.linkedin.com/in/mattcsnyder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-platform="LinkedIn"
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 border-r border-white/15 py-5 pr-4 text-slate-300 transition-colors hover:text-white"
                >
                  <FaLinkedin aria-hidden="true" />
                  <span className="text-sm font-medium">LinkedIn</span>
                  <span aria-hidden="true" className="ml-auto text-slate-600 group-hover:text-slate-300">↗</span>
                </a>

                <a
                  href="https://github.com/snooder"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-platform="GitHub"
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3 py-5 pl-4 text-slate-300 transition-colors hover:text-white"
                >
                  <FaGithub aria-hidden="true" />
                  <span className="text-sm font-medium">GitHub</span>
                  <span aria-hidden="true" className="ml-auto text-slate-600 group-hover:text-slate-300">↗</span>
                </a>
              </div>

              <div className="mt-5 flex flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <span>New York City or remote</span>
                <span>Replies within one business day</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
