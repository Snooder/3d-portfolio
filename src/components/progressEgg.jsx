import React from "react";
import { FaEgg } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";
import { logEvent } from "../analytics"; // Import logEvent for tracking clicks

const ProgressEgg = ({ color, tooltip, found, startAnimation, size = 50 }) => {
  const handleEggClick = (event) => {
    event.preventDefault();
    logEvent("Egg Hunt", "Click", `Location - ${tooltip.label}`);
    const destination = document.querySelector(tooltip.url);
    const wrapper = document.querySelector(".wrapper");

    if (destination && wrapper) {
      wrapper.scrollTo({
        top: wrapper.scrollTop + destination.getBoundingClientRect().top - 60,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", tooltip.url);
    }
  };

  return (
    <div
      className="egg-container"
      style={{
        opacity: startAnimation ? 1 : 0,
        transition: `opacity 500ms ease-in-out`,
      }}
    >
      <a
        href={tooltip.url}
        className="egg-link"
        onClick={handleEggClick}
        aria-label={`Go to ${tooltip.label} for the ${color} egg`}
      >
        {found ? (
          <FaEgg
            size={size}
            style={{ color, opacity: 0.8 }}
            aria-hidden="true"
          />
        ) : (
          <MdOutlineEgg
            size={size}
            style={{ color, opacity: 0.8 }}
            aria-hidden="true"
          />
        )}
        <span className="location-label">{tooltip.label}</span>
      </a>

      {/* CSS styling */}
      <style jsx>{`
        .egg-container {
          position: relative;
          display: inline-block;
        }

        .egg-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: inherit;
          text-decoration: none;
        }

        .egg-link svg {
          transition: transform 180ms ease, opacity 180ms ease;
        }

        .egg-link:hover svg,
        .egg-link:focus-visible svg {
          transform: translateY(-2px) scale(1.08);
          opacity: 1 !important;
        }

        .location-label {
          color: #64748b;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 180ms ease;
        }

        .egg-link:hover .location-label,
        .egg-link:focus-visible .location-label {
          color: #e2e8f0;
        }
      `}</style>
    </div>
  );
};

export default ProgressEgg;
