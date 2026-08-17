import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import EggProgress from "./EggProgress";
import EggAnimation from "./EggAnimation";
import LootboxContainer from "./LootboxContainer";
import { useEggContext } from "../context/EggContext";
import { logEvent } from "../analytics";

const navLinks = [
  { id: "hero",       title: "Home"       },
  { id: "experience", title: "Experience" },
  { id: "github",     title: "GitHub"     },
  { id: "designs",    title: "Designs"    },
  { id: "events",     title: "Events"     },
  { id: "contact",    title: "Contact"    },
];

const Navbar = ({ active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lootboxVisible, setLootboxVisible] = useState(false);
  const { eggAnimation } = useEggContext();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleLootboxVisibility = () => {
    logEvent("Lootbox", "click", "Lootbox toggled");
    setLootboxVisible(!lootboxVisible);
  };

  const handleNavClick = (id, title) => {
    setActive(id);
    setMenuOpen(false);
    logEvent("Navigation", "Click", title);
  };

  return (
    <div className="relative">
      <nav className="w-full fixed top-0 z-50 flex items-center justify-between px-6 py-3 bg-gray-900/60">

        {/* Left: Logo */}
        <Link
          to="/#hero"
          className="text-white text-2xl font-bold tracking-widest z-20"
          onClick={() => handleNavClick("hero", "Home")}
          scroll={(el) => { const wrapper = document.querySelector('.wrapper'); if (wrapper) { wrapper.scrollTo({ top: wrapper.scrollTop + el.getBoundingClientRect().top - 60, behavior: "smooth" }); } }}
        >
          MS
        </Link>

        {/* Center: Nav links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 z-20">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <Link
                to={`/#${nav.id}`}
                scroll={(el) => { const wrapper = document.querySelector('.wrapper'); if (wrapper) { wrapper.scrollTo({ top: wrapper.scrollTop + el.getBoundingClientRect().top - 60, behavior: "smooth" }); } }}
                onClick={() => handleNavClick(nav.id, nav.title)}
                className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 ${
                  active === nav.id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Gift + mobile hamburger */}
        <div className="flex items-center gap-3 z-20">
          <EggAnimation
            color={eggAnimation?.color || "yellow"}
            triggerEgg={eggAnimation}
          />

          {menuOpen && <EggProgress eggsFound={[]} />}

          <div className="relative">
            <button
              onClick={toggleLootboxVisibility}
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
              className="cursor-pointer p-1"
            >
              <FaGift size={28} color="#FFD700" />
            </button>
            {isTooltipVisible && (
              <div className="absolute bottom-12 right-0 w-48 rounded bg-black px-2 py-1 text-xs text-white whitespace-normal">
                Reach 70% to bypass the easter egg hunt!
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* LootboxContainer */}
        <div
          className={`absolute top-14 right-6 px-2 pt-2 pb-4 rounded-xl transition-opacity duration-500 ${
            lootboxVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ background: 'linear-gradient(135deg, #0d2b0d 0%, #1a4d1a 50%, #0f3b0f 100%)' }}
        >
          <LootboxContainer />
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed left-0 right-0 top-14 z-40 flex flex-col gap-2 bg-black/90 px-4 py-4 backdrop-blur-sm md:hidden">
          {navLinks.map((nav) => (
            <Link
              key={nav.id}
              to={`/#${nav.id}`}
              scroll={(el) => { const wrapper = document.querySelector('.wrapper'); if (wrapper) { wrapper.scrollTo({ top: wrapper.scrollTop + el.getBoundingClientRect().top - 60, behavior: "smooth" }); } }}
              onClick={() => handleNavClick(nav.id, nav.title)}
              className={`py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                active === nav.id
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-900 text-white hover:bg-gray-700"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
