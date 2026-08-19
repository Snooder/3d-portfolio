import React, { useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaTimes } from 'react-icons/fa';
import useCopyEmail from '../../hooks/useCopyEmail';

const CONTACTS = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'matthew.swe.snyder@gmail.com',
    copyable: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mattcsnyder',
    href: 'https://www.linkedin.com/in/mattcsnyder/',
    copyable: false,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/mattcsnyder',
    href: 'https://github.com/mattcsnyder',
    copyable: false,
  },
];

const ContactPopup = ({ onClose }) => {
  const { copied, copyEmail } = useCopyEmail();

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,4,14,0.88)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md mx-4 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020818 0%, #000d2e 100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-500 mb-1">Let's connect</p>
            <h2 className="text-xl font-bold text-white">Can't wait to meet you 👋</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white transition-colors p-1"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Contact rows */}
        <div className="px-6 py-4 flex flex-col gap-3">
          {CONTACTS.map(({ icon: Icon, label, value, href, copyable }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-white/5 hover:bg-white/8 border border-white/10 rounded-xl px-4 py-3 transition-colors group"
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                <Icon size={16} className="text-blue-400" />
              </div>

              {/* Label + value */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-0.5">{label}</p>
                {copyable ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-live="polite"
                    className="block truncate text-left text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    {copied ? 'Copied!' : value}
                  </button>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block truncate text-sm text-slate-200 transition-colors hover:text-white"
                  >
                    {value}
                  </a>
                )}
              </div>

              {/* Copy button (email only) */}
              {copyable && (
                <button
                  onClick={copyEmail}
                  className="flex-shrink-0 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-200"
                  style={copied
                    ? { background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.4)', color: '#34d399' }
                    : { background: 'rgba(37,99,235,0.15)', borderColor: 'rgba(37,99,235,0.4)', color: '#60a5fa' }
                  }
                >
                  {copied ? <FaCheck size={11} /> : <FaCopy size={11} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}

              {/* External link arrow (non-email) */}
              {!copyable && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-slate-600 hover:text-blue-400 transition-colors text-sm"
                >
                  ↗
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="px-6 pb-5 pt-1">
          <p className="text-xs text-slate-600 text-center">Click anywhere outside to close</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
