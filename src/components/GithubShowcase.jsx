import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { githubRepos } from "../data";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { logEvent } from "../analytics"; // Import logEvent for logging interactions

const languageStyles = {
  All: { accent: "#c084fc" },
  "TypeScript / JavaScript": { accent: "#60a5fa" },
  Python: { accent: "#38bdf8" },
  Java: { accent: "#fb7185" },
  C: { accent: "#94a3b8" },
};

const defaultLanguageTheme = { accent: "#94a3b8" };

const GithubShowcase = ({ compact = false }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const languages = ["All", ...Object.keys(githubRepos)];
  const selectedLanguage = languages[selectedLanguageIndex];
  const repos =
    selectedLanguage === "All"
      ? Object.entries(githubRepos).flatMap(([language, list]) =>
          list.map((repo) => ({ ...repo, sourceLanguage: language }))
        )
      : githubRepos[selectedLanguage].map((repo) => ({
          ...repo,
          sourceLanguage: selectedLanguage,
        }));

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [gridRef, gridInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Handle changing the selected language and log the event
  const handleLanguageClick = (index, language) => {
    setSelectedLanguageIndex(index);
    logEvent("Language Switch", "Change", language); // Log the language switch
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12">
      {/* Motion div for the "GitHub & More" title with blue glow */}
      <motion.div
        ref={ref}
        className="text-center"
        variants={textVariant()}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
          Code in the open
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          GitHub & More
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          A language-by-language look at experiments, utilities, and products I’ve built over time.
        </p>
      </motion.div>

      {/* Language selector */}
      <div className="relative mt-12 overflow-hidden rounded-[24px] border border-white/10 bg-[#090e1d]/90 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:p-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <ul className="flex flex-wrap justify-center gap-3" aria-label="Choose a language">
            {languages.map((language, index) => {
              const isSelected = selectedLanguage === language;
              const theme = languageStyles[language] || defaultLanguageTheme;

              return (
                <li key={language}>
                  <button
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handleLanguageClick(index, language)}
                    className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                      isSelected
                        ? "border-white/20 bg-white/[0.08] text-white shadow-lg"
                        : "border-white/10 bg-white/[0.02] text-slate-400 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-transform duration-300 ${
                        isSelected ? "scale-125" : "scale-75 opacity-60 group-hover:scale-100"
                      }`}
                      style={{ backgroundColor: theme.accent }}
                    />
                    {language}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <JiggleSpinComponent shadowColor="rgba(0, 0, 255, 0.8)" eggColor="blue">
              <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
            </JiggleSpinComponent>
            <a
              href="https://github.com/snooder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            >
              snooder
            </a>
          </div>
        </div>
      </div>

      {/* Repositories List */}
      <motion.div
        ref={gridRef}
        key={selectedLanguage}
        className={`mt-8 grid grid-cols-1 gap-5 ${
          compact ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
        variants={staggerContainer(0.08, 0)}
        initial="hidden"
        animate={gridInView ? "show" : "hidden"}
      >
        {repos.map((repo, index) => {
          const cardTheme = languageStyles[repo.sourceLanguage] || defaultLanguageTheme;

          return (
            <motion.div
              key={`${repo.sourceLanguage}-${repo.name}-${index}`}
              variants={fadeIn("up", "spring", 0, 0.5)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ backgroundColor: cardTheme.accent }}
              />

              <div className="flex items-start justify-between gap-3">
                <h3 className="truncate text-lg font-bold text-white">
                  {repo.visibility === "Public" ? (
                    <a
                      href={`https://github.com/snooder/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-sky-300"
                      onClick={() => logEvent("Repository", "Click", repo.name)} // Log event for repo clicks
                    >
                      {repo.name}
                    </a>
                  ) : (
                    repo.name
                  )}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                    repo.visibility === "Public"
                      ? "border-sky-400/40 text-sky-300"
                      : "border-white/15 text-slate-500"
                  }`}
                >
                  {repo.visibility}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{repo.description}</p>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">
                {repo.lastUpdated}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default GithubShowcase;
