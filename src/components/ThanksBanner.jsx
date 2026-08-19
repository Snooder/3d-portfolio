import React from "react";
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import useCopyEmail from "../hooks/useCopyEmail";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mattcsnyder/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/mattcsnyder",
    icon: FaGithub,
  },
  {
    label: "Email",
    copyable: true,
    icon: FaEnvelope,
  },
];

const ThanksBanner = () => {
  const { copied, copyEmail } = useCopyEmail();

  return (
  <aside className="relative z-30 border-y border-white/10 bg-[#070b14]" aria-label="Connect with Matt">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 py-9 sm:px-8 md:flex-row lg:px-12">
      <div className="text-center md:text-left">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 md:justify-start">
          <span className="thanks-twinkle" aria-hidden="true">✦</span>
          <span>Thanks for stopping by</span>
        </p>
        <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
          Find me online or send a note.
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-3" aria-label="Matt's profiles">
        {links.map(({ label, href, icon: Icon, copyable }) => {
          const LinkElement = copyable ? "button" : "a";
          return (
          <LinkElement
            key={label}
            type={copyable ? "button" : undefined}
            href={copyable ? undefined : href}
            target={!copyable && href.startsWith("http") ? "_blank" : undefined}
            rel={!copyable && href.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={copyable ? copyEmail : undefined}
            aria-live={copyable ? "polite" : undefined}
            className="group flex items-center gap-2.5 border border-white/15 bg-white/[0.025] px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-sky-300/50 hover:bg-sky-400/[0.07] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            {copyable && copied ? <FaCheck className="text-emerald-400" aria-hidden="true" /> : <Icon className="text-sky-400 transition-colors group-hover:text-sky-300" aria-hidden="true" />}
            {copyable && copied ? "Copied!" : label}
          </LinkElement>
          );
        })}
      </nav>
    </div>
  </aside>
  );
};

export default ThanksBanner;
