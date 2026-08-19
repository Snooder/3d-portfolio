import React, { useState } from 'react';
import ContactPopup from './ContactPopup';
import JiggleSpinComponent from '../JiggleSpinComponent';

const TAGLINE = [
  {
    text: (
      <>
        I build software that runs{' '}
        <strong className="text-slate-200 font-semibold">real businesses</strong>{' '}
        <strong className="font-semibold text-yellow-300">end-to-end</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        From{' '}
        <strong className="text-blue-400 font-semibold">apps and web design</strong>{' '}
        to{' '}
        <strong className="text-slate-200 font-semibold">LLMs and cloud infrastructure</strong>.
      </>
    ),
  },
  {
    text: (
      <>
        I enjoy turning{' '}
        <strong className="text-emerald-400 font-semibold">problems into solutions</strong>.
      </>
    ),
  },
];

const PhoneHeaderText = ({ onScrollTo, onContactOpen }) => (
  <div className="flex flex-col gap-5 relative z-10 w-full max-w-md">
    <p className="text-xs font-semibold tracking-[3px] uppercase text-blue-500">
      Full Stack Engineer &amp; Founder
    </p>

    <h1
      className="font-extrabold leading-[1.05] tracking-tight text-white"
      style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
    >
      <JiggleSpinComponent shadowColor="rgba(255, 255, 255, 0.8)" eggColor="white">
        <span>Matt 👋</span>
      </JiggleSpinComponent>
      <span style={{ display: 'block', marginTop: '0.05em' }}>Snyder 🥨</span>
    </h1>

    <ul className="flex flex-col gap-2 max-w-sm">
      {TAGLINE.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[15px] text-slate-400 leading-relaxed">
          <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-blue-600 flex-shrink-0" />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    <div className="mt-2 flex flex-wrap justify-center gap-3 sm:justify-start">
      <button
        onClick={() => onScrollTo('designs')}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
      >
        View My Work
      </button>
      <button
        onClick={() => onScrollTo('experience')}
        className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
      >
        My Experience
      </button>
      <button
        onClick={onContactOpen}
        className="mx-auto bg-transparent hover:bg-blue-600/10 text-blue-400 text-sm font-semibold px-6 py-3 rounded-lg border border-blue-600 transition-colors duration-200 sm:mx-0"
      >
        Get In Touch
      </button>
    </div>
  </div>
);

export default PhoneHeaderText;
