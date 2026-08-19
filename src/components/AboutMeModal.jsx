import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTimes,
  FaRocket,
  FaSyncAlt,
  FaUsers,
  FaLandmark,
  FaUtensils,
  FaCannabis,
  FaFileInvoiceDollar,
  FaHeartbeat,
  FaPython,
  FaReact,
  FaDatabase,
  FaAws,
} from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { SiCloudflare } from 'react-icons/si';
import useCopyEmail from '../hooks/useCopyEmail';

const engagementTypes = [
  { icon: FaRocket, accent: '#38bdf8', title: 'Greenfield builds', desc: 'Taking an idea all the way to production.' },
  { icon: FaSyncAlt, accent: '#a78bfa', title: 'Modernization', desc: 'Replacing legacy systems with something that scales.' },
  { icon: FaUsers, accent: '#34d399', title: 'Embedded delivery', desc: 'Working inside your team to ship fast.' },
];

const products = [
  { name: 'MuseumIQ', icon: FaLandmark, accent: '#38bdf8', desc: 'Collections and operations for museums, centralizing artifacts, exhibits, and workflows.' },
  { name: 'RestaurantIQ', icon: FaUtensils, accent: '#a78bfa', desc: 'Operational intelligence for hospitality teams, streamlining compliance and daily workflows.' },
  { name: 'WeedBuddy', icon: FaCannabis, accent: '#34d399', desc: 'Compliance-ready retail platform for dispensaries, unifying tracking and reporting.' },
  { name: 'Snydex Invoice', icon: FaFileInvoiceDollar, accent: '#fbbf24', desc: 'Modern billing workflow system that automates invoicing at scale.' },
];

const techStack = [
  { icon: FaGolang, label: 'Go', color: '#00add8' },
  { icon: FaPython, label: 'Python', color: '#3776ab' },
  { icon: FaReact, label: 'React', color: '#61dafb' },
  { icon: FaDatabase, label: 'PostgreSQL', color: '#34d399' },
  { icon: FaAws, label: 'AWS', color: '#ff9900' },
  { icon: SiCloudflare, label: 'Cloudflare', color: '#f38020' },
];

const AboutMeModal = ({ onClose }) => {
  const { copied, copyEmail } = useCopyEmail();
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(2, 6, 23, 0.82)' }}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#090e1d]/95 shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.16),transparent_55%)]" />

        <div className="relative flex items-start justify-between border-b border-white/10 px-6 pb-4 pt-6 sm:px-8">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/80">
              About
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              It&apos;s nice to meet you <span className="inline-block">👋</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="Close"
          >
            <FaTimes className="text-sm" />
          </button>
        </div>

        <div className="relative flex flex-col gap-4 overflow-y-auto px-6 py-5 text-sm leading-6 text-slate-300 sm:px-8 sm:text-base">
          <p>
            I&apos;m Matt, a full stack engineer. I like finding the part of a business that&apos;s manual, slow, or quietly falling apart, and building something that actually fixes it.
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {engagementTypes.map(({ icon: Icon, accent, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${accent}1a`, color: accent }}
                >
                  <Icon className="text-sm" />
                </span>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs leading-5 text-slate-400">{desc}</p>
              </div>
            ))}
          </div>

          <p>
            These days I run <strong className="text-white">Snydex Platforms</strong>, building custom software for businesses that have outgrown spreadsheets and duct-taped tools. A few of those projects grew into full products:
          </p>

          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.03]">
            {products.map(({ name, icon: Icon, accent, desc }) => (
              <div
                key={name}
                className="flex items-start gap-3 border-b border-white/10 px-4 py-3 last:border-0"
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${accent}1a`, color: accent }}
                >
                  <Icon className="text-xs" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{name}</p>
                  <p className="text-xs leading-5 text-slate-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Built primarily with
            </p>
            <div className="flex flex-wrap gap-4">
              {techStack.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform hover:-translate-y-0.5"
                    style={{ color }}
                  >
                    <Icon className="text-base" />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: 'rgba(251,113,133,0.1)', color: '#fb7185' }}
            >
              <FaHeartbeat className="text-sm" />
            </span>
            <p className="text-sm leading-6 text-slate-300">
              Before Snydex, I worked on ML platforms at <strong className="text-white">Flatiron Health</strong>, improving data pipelines for cancer research systems. That job taught me a lot about building software that has to keep running, no matter what.
            </p>
          </div>

          <p className="text-sm leading-6 text-slate-400">
            Mostly, I just like taking messy, real-world problems and turning them into something people can actually rely on.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-3 border-t border-white/10 px-6 py-4 sm:px-8">
          <a
            href="https://www.linkedin.com/in/mattsnyder1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/mattsnyder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <button
            type="button"
            onClick={copyEmail}
            aria-live="polite"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <FaEnvelope size={16} />
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AboutMeModal;
