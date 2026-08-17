import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const targetRoles = ['Full Stack', 'ML / AI Infrastructure'];
const coreSkills = ['React', 'Go', 'Python', 'TypeScript', 'PostgreSQL', 'AWS'];
const workLocations = ['📍 New York City', '🌐 Remote'];

const chipClassName = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium';
const emphasisChipClassName = 'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold';

const EMAIL_ADDRESS = 'matthew.swe.snyder@gmail.com';

const RecruiterBanner = ({ onReadMore }) => {
  const [emailCopied, setEmailCopied] = useState(false);
  const copiedTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(copiedTimerRef.current), []);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = EMAIL_ADDRESS;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setEmailCopied(true);
      window.clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
  <div
    className="w-full border-y border-blue-900/40 px-4 py-5 sm:px-6 md:px-16"
    style={{ background: 'linear-gradient(135deg, #000000 0%, #020818 60%, #000d2e 100%)' }}
  >
    <div className="grid min-w-0 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="min-w-0 lg:flex lg:items-center">
        <div className="flex flex-col gap-3 text-xs text-slate-400 sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 text-slate-300 sm:flex-nowrap">
            <span className="text-3xl leading-none">👋</span>
            <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Hey recruiters</span>
            <span className="text-slate-300">Matt is</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-900/50 px-2.5 py-1 font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Looking for work
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Targeting</span>
            {targetRoles.map((role) => (
              <span
                key={role}
                className={`${emphasisChipClassName} border-blue-500/40 bg-blue-900/50 text-blue-300`}
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Core stack</span>
            {coreSkills.map((lang) => (
              <span
                key={lang}
                className={`${chipClassName} border-slate-600/40 bg-slate-800/60 text-slate-300`}
              >
                {lang}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs uppercase tracking-wide">Location</span>
            {workLocations.map((location) => (
              <span
                key={location}
                className={`${chipClassName} gap-1 border-slate-600/40 bg-slate-800/60 text-slate-300`}
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="order-3 min-w-0 border-t border-slate-800/90 pt-4 lg:flex lg:items-center lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
        <button
          type="button"
          onClick={onReadMore}
          className="flex w-full flex-col justify-center gap-3 rounded-2xl border border-slate-800/90 bg-slate-950/40 px-5 py-5 text-left transition-colors hover:border-blue-500/40 hover:bg-slate-900/70"
        >
          <p className="text-sm leading-relaxed text-slate-300">
            I&apos;m Matt, a full stack engineer focused on creating software that helps people and businesses.
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?
          </p>
          <span className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300">
            Read more
          </span>
        </button>
      </div>

      <aside className="order-2 min-w-0 border-t border-slate-800/90 pt-4 lg:border-t-0 lg:pt-0">
        <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-800/90 bg-slate-950/40 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            Find me online
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            Connect, explore my code, or copy my email to start a conversation.
          </p>
          <div className="mt-3 grid gap-2">
            <a
              href="https://www.linkedin.com/in/mattcsnyder/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/60 hover:bg-sky-950/40 hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0a66c2] text-white shadow-lg shadow-blue-950/40 transition-transform duration-200 group-hover:scale-105">
                <FaLinkedin aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block">Connect on LinkedIn</span>
                <span className="block truncate text-[10px] font-normal text-slate-400">/in/mattcsnyder</span>
              </span>
              <span aria-hidden="true" className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-sky-300">↗</span>
            </a>

            <a
              href="https://github.com/snooder"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-950/30 hover:text-white"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-700 text-white shadow-lg shadow-black/30 transition-transform duration-200 group-hover:scale-105">
                <FaGithub aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block">Explore my GitHub</span>
                <span className="block truncate text-[10px] font-normal text-slate-400">@snooder</span>
              </span>
              <span aria-hidden="true" className="text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-violet-300">↗</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-live="polite"
              className={`group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${emailCopied ? 'border-emerald-400/80 bg-emerald-950/60 text-emerald-100 ring-2 ring-emerald-400/20' : 'border-slate-700/70 bg-slate-900/70 text-slate-200 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-emerald-950/40 hover:text-white'}`}
            >
              <span className={`grid h-8 w-8 place-items-center rounded-lg text-white shadow-lg transition-all duration-200 ${emailCopied ? 'scale-110 bg-emerald-500 shadow-emerald-950/40' : 'bg-emerald-700 shadow-emerald-950/40 group-hover:scale-105'}`}>
                {emailCopied ? <FaCheck aria-hidden="true" /> : <FaEnvelope aria-hidden="true" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block">{emailCopied ? 'Email copied!' : 'Copy email'}</span>
                <span className="block truncate text-[10px] font-normal text-slate-400">{EMAIL_ADDRESS}</span>
              </span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  </div>
  );
};

export default RecruiterBanner;
