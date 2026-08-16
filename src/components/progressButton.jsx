import React from "react";

const ProgressButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(); // Trigger the video and navigation actions
    window.location.href = "#hero"; // Navigate to the hero section
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-xl border border-amber-300/40 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-300 transition-all hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-amber-400/20"
    >
      Claim Your Prize
    </button>
  );
};

export default ProgressButton;
