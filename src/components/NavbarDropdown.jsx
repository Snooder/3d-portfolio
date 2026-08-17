import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { logEvent } from "../analytics"; // Assume analytics.js contains a logEvent function

const NavbarDropdown = ({ active, setActive, menuOpen, setMenuOpen }) => {
  const [showGradient, setShowGradient] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const navLinks = [
    { id: "hero", title: "Home" },
    { id: "experience", title: "Experience" },
    { id: "github", title: "GitHub" },
    { id: "designs", title: "Designs" },
    { id: "events", title: "Events" },
    { id: "contact", title: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => {
      const newMenuState = !prevMenuOpen;
      setShowGradient(newMenuState);
      setTimeout(() => setStartAnimation(newMenuState), 100);
      return newMenuState;
    });
  };

  // Handle navigation click with a delay to ensure state sync
  const handleNavClick = (navId, title) => {
    setShowGradient(false);
    setStartAnimation(false);
    setActive(navId); // Set active link
    logEvent("Navigation", "Click", title); // Log the navigation click event

    setTimeout(() => {
      toggleMenu(); // Close the menu with a small delay
    }, 50);
  };

  return (
    <div className="flex items-center relative z-20">
      {/* Logo and Arrow */}
      <Link
        smooth
        to="/#hero"
        className="text-white text-[26px] lg:text-[36px] font-bold mr-4 z-20"
        onClick={() => {
          setActive("hero");
          logEvent("Navigation", "Click", "Home");
        }}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        MS
      </Link>

      <button onClick={toggleMenu} className="text-white text-[18px] font-bold z-20">
        <span
          className={`inline-block transition-transform duration-300 transform ${
            menuOpen ? "-rotate-90" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>

      {/* Background Gradient */}
      {showGradient && (
        <div
          className={`fixed top-0 left-0 w-full h-full transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          } pointer-events-none`}
          style={{
            background: "linear-gradient(to bottom, black, transparent)",
            zIndex: 1,
          }}
        ></div>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 mt-2 flex flex-col gap-4 z-50"
          style={{ left: "2.5rem" }} // Adjust if needed for better alignment
        >
          {navLinks.map((nav, index) => (
            <button
              key={nav.id}
              onClick={() => handleNavClick(nav.id, nav.title)}
              className={`py-4 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-500 ease-in-out ${
                active === nav.id ? "text-yellow-400" : "text-white"
              }`}
              style={{
                opacity: startAnimation ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Link
                smooth
                to={`/#${nav.id}`}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                {nav.title}
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
