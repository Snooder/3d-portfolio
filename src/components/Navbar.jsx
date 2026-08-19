import React, { useState } from "react";
import { FaEgg } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import EggProgress from "./EggProgress";
import EggAnimation from "./EggAnimation";
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
  const { eggAnimation } = useEggContext();

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

        {/* Right: Egg hunt + mobile hamburger */}
        <div className="flex items-center gap-3 z-20">
          <EggAnimation
            color={eggAnimation?.color || "yellow"}
            triggerEgg={eggAnimation}
          />

          {menuOpen && <EggProgress eggsFound={[]} />}

          <div className="group relative">
            <Link
              smooth
              to="/#eggHunt"
              scroll={(el) => { const wrapper = document.querySelector('.wrapper'); if (wrapper) { wrapper.scrollTo({ top: wrapper.scrollTop + el.getBoundingClientRect().top - 60, behavior: "smooth" }); } }}
              onClick={() => logEvent("Navigation", "Click", "Egg Hunt")}
              aria-label="Go to the egg hunt footer"
              className="grid h-10 w-10 place-items-center rounded-full border border-yellow-200/60 bg-yellow-300/15 text-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.45)] transition-all duration-300 hover:scale-110 hover:border-yellow-100 hover:bg-yellow-300/25 hover:text-yellow-100 hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-200"
            >
              <FaEgg className="text-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            </Link>
            <div className="pointer-events-none absolute right-0 top-12 w-max translate-y-1 rounded-lg border border-white/10 bg-black/90 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
              View the egg hunt
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
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
