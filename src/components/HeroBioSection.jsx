import React, { useState } from 'react';
import JiggleSpinComponent from './JiggleSpinComponent';
import { matt_headshot_2026, matt_headshot_2026_live } from '../assets';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import AboutMeModal from './AboutMeModal';
import useCopyEmail from '../hooks/useCopyEmail';

const HeroBioSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { copied, copyEmail } = useCopyEmail();

  return (
    <>
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Profile Picture (1/3) */}
        <div className="flex justify-center items-center md:col-span-1">
          <JiggleSpinComponent noJiggle>
            <div className="relative w-[22rem] h-[22rem] max-w-full group">
              <img
                src={matt_headshot_2026_live}
                alt="Matt Snyder Live"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-700 group-hover:opacity-0"
                style={{ objectPosition: 'center 10%' }}
              />
              <img
                src={matt_headshot_2026}
                alt="Matt Snyder"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ objectPosition: 'center 10%' }}
              />
            </div>
          </JiggleSpinComponent>
        </div>

        {/* Right: Short Bio (2/3) */}
        <div className="md:col-span-2 w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-6xl p-6 md:p-10 bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl border border-white border-opacity-20 mx-auto md:mx-8">
            <h2 className="font-bold text-[clamp(1.25rem,3vw,2rem)] text-white mb-2">About Me</h2>
            <div className="flex flex-col gap-4 text-[clamp(0.9rem,1.6vw,1.1rem)] text-white/90 leading-relaxed">
              <p>I'm Matt, a full stack engineer focused on creating software that helps people and businesses.</p>
              <p>I work at the intersection of systems, data, and product, usually starting with a simple question: where is something manual, slow, or breaking down, and how can software make it seamless?</p>
              <p>Today, I run Snydex Platforms, where I design and build custom SaaS products and internal systems for businesses that have outgrown spreadsheets, disconnected tools, or fragile workflows.</p>
              <div className="flex items-center justify-between w-full">
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold tracking-wide transition-colors duration-200"
                >
                  Read More
                </button>
                <div className="flex items-center gap-4">
                  <a href="https://linkedin.com/in/mattcsnyder" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200">
                    <FaLinkedin size={26} />
                  </a>
                  <a href="https://github.com/mattsnyder" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200">
                    <FaGithub size={26} />
                  </a>
                  <button type="button" onClick={copyEmail} aria-live="polite" className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-200">
                    <FaEnvelope size={26} />
                    <span className="text-xs">{copied ? 'Copied!' : 'Copy email'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <AboutMeModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default HeroBioSection;
