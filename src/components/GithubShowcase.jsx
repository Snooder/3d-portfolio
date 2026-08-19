import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { githubRepos } from "../data";
import { textVariant, fadeIn, staggerContainer } from "../utils/motion";
import { logEvent } from "../analytics"; // Import logEvent for logging interactions
import GithubTerminalBackground from "./GithubTerminalBackground";

const languageStyles = {
  All: { accent: "#c084fc" },
  "TypeScript / JavaScript": { accent: "#60a5fa" },
  Python: { accent: "#38bdf8" },
  Java: { accent: "#fb7185" },
  C: { accent: "#94a3b8" },
};

const defaultLanguageTheme = { accent: "#94a3b8" };

const technologyMatchers = [
  { label: "TypeScript", pattern: /typescript/i },
  { label: "JavaScript", pattern: /javascript/i },
  { label: "React", pattern: /react/i },
  { label: "Node.js", pattern: /node\.js/i },
  { label: "Express", pattern: /express\.js|express/i },
  { label: "MongoDB", pattern: /mongodb/i },
  { label: "Docker", pattern: /docker/i },
  { label: "Chakra UI", pattern: /chakra ui/i },
  { label: "NativeScript", pattern: /nativescript/i },
  { label: "OBS", pattern: /\bobs\b/i },
  { label: "Python", pattern: /python/i },
  { label: "Discord.py", pattern: /discord\.py/i },
  { label: "Machine Learning", pattern: /machine learning|\bai\b/i },
  { label: "Naive Bayes", pattern: /naive bayes/i },
  { label: "Kalman Filters", pattern: /kalman/i },
  { label: "Shopify API", pattern: /shopify/i },
  { label: "SQL", pattern: /\bsql\b/i },
  { label: "DNS", pattern: /\bdns\b/i },
  { label: "Java", pattern: /java-based|java project|built with java|developed with java/i },
  { label: "RuneLite", pattern: /runelite/i },
  { label: "C#", pattern: /c#/i },
  { label: "Unity", pattern: /unity/i },
  { label: "C", pattern: /\bc project/i },
  { label: "TCP/IP", pattern: /\btcp\b/i },
  { label: "Go", pattern: /\bgolang\b|built (?:in|with) go\b/i },
];

const technologyDefaults = {
  "TypeScript / JavaScript": ["JavaScript", "Node.js", "Web APIs"],
  Python: ["Python", "REST APIs", "Data Processing"],
  Java: ["Java", "RuneLite", "Plugin API"],
  C: ["C", "Networking", "Systems Programming"],
};

const technologyColors = {
  TypeScript: "#60a5fa", JavaScript: "#facc15", React: "#22d3ee",
  "Node.js": "#4ade80", Express: "#a3a3a3", MongoDB: "#34d399",
  Docker: "#38bdf8", "Chakra UI": "#2dd4bf", NativeScript: "#3b82f6",
  OBS: "#c084fc", Python: "#fbbf24", "Discord.py": "#818cf8",
  "Machine Learning": "#e879f9", "Naive Bayes": "#f472b6",
  "Kalman Filters": "#a78bfa", "Shopify API": "#84cc16", SQL: "#38bdf8",
  DNS: "#fb923c", Java: "#fb7185", RuneLite: "#f59e0b",
  "Plugin API": "#f97316", "C#": "#a78bfa", Unity: "#e5e7eb",
  C: "#94a3b8", "TCP/IP": "#2dd4bf", Networking: "#34d399",
  "Systems Programming": "#cbd5e1", "Web APIs": "#60a5fa",
  "REST APIs": "#2dd4bf", "Data Processing": "#c084fc",
  "Game Development": "#f472b6",
  Go: "#22d3ee",
};

const getTechnologyBadges = (repo) => {
  const searchableText = `${repo.name} ${repo.description}`;
  const detected = technologyMatchers
    .filter(({ pattern }) => pattern.test(searchableText))
    .map(({ label }) => label);
  const defaults = repo.name.toLowerCase().includes("unity")
    ? ["C#", "Unity", "Game Development"]
    : technologyDefaults[repo.sourceLanguage] || ["Software Engineering", "APIs", "Data"];

  return [...new Set([...(repo.technologies || []), ...detected, ...defaults])].slice(0, 4);
};

const GithubShowcase = ({ compact = false }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedTool, setSelectedTool] = useState("All");
  const [visibleRows, setVisibleRows] = useState(5);
  const [columnCount, setColumnCount] = useState(1);
  const languages = ["All", ...Object.keys(githubRepos)];
  const selectedLanguage = languages[selectedLanguageIndex];
  const languageRepos =
    selectedLanguage === "All"
      ? Object.entries(githubRepos).flatMap(([language, list]) =>
          list.map((repo) => ({ ...repo, sourceLanguage: language }))
        )
      : githubRepos[selectedLanguage].map((repo) => ({
          ...repo,
          sourceLanguage: selectedLanguage,
        }));
  const toolOptions = [
    "All",
    ...Array.from(
      new Set(languageRepos.flatMap((repo) => getTechnologyBadges(repo)))
    ).sort(),
  ];
  const repos = selectedTool === "All"
    ? languageRepos
    : languageRepos.filter((repo) => getTechnologyBadges(repo).includes(selectedTool));
  const visibleRepos = repos.slice(0, visibleRows * columnCount);
  const hasMoreRepos = visibleRepos.length < repos.length;

  useEffect(() => {
    const updateColumnCount = () => {
      if (compact) {
        setColumnCount(window.innerWidth >= 640 ? 2 : 1);
        return;
      }

      setColumnCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, [compact]);

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
    const nextIndex = language !== "All" && selectedLanguage === language ? 0 : index;
    const nextLanguage = languages[nextIndex];

    setSelectedLanguageIndex(nextIndex);
    setSelectedTool("All");
    setVisibleRows(5);
    logEvent("Language Switch", "Change", nextLanguage); // Log the language switch
  };

  const handleToolClick = (tool) => {
    const nextTool = tool !== "All" && selectedTool === tool ? "All" : tool;

    setSelectedTool(nextTool);
    setVisibleRows(5);
    logEvent("Repository Tool", "Change", nextTool);
  };

  return (
    <div className="relative isolate min-h-[1100px] overflow-hidden">
      <GithubTerminalBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-12">
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
          <div className="w-full min-w-0">
            <ul className="flex flex-wrap justify-center gap-3 sm:justify-start" aria-label="Choose a language">
              {languages.map((language, index) => {
                const isSelected = selectedLanguage === language;
                const theme = languageStyles[language] || defaultLanguageTheme;

                return (
                  <li key={language}>
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      aria-label={isSelected && language !== "All" ? `Clear ${language} filter` : `Filter by ${language}`}
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

            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="mr-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Tools
              </span>
              {toolOptions.map((tool) => {
                const isSelected = selectedTool === tool;
                const accent = technologyColors[tool] || "#c084fc";
                return (
                  <button
                    key={tool}
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={isSelected && tool !== "All" ? `Clear ${tool} filter` : `Filter by ${tool}`}
                    onClick={() => handleToolClick(tool)}
                    className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
                    style={{
                      borderColor: `${accent}${isSelected ? "88" : "44"}`,
                      backgroundColor: `${accent}${isSelected ? "20" : "0a"}`,
                      color: isSelected ? accent : "#94a3b8",
                    }}
                  >
                    {tool}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.24)]">
            <JiggleSpinComponent shadowColor="rgba(0, 0, 255, 0.8)" eggColor="blue">
              <FontAwesomeIcon icon={faGithub} className="text-4xl text-white" />
            </JiggleSpinComponent>
            <a
              href="https://github.com/mattcsnyder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-sky-300"
            >
              mattcsnyder
            </a>
          </div>
        </div>
      </div>

      {/* Repositories List */}
      <motion.div
        ref={gridRef}
        key={`${selectedLanguage}-${selectedTool}`}
        className={`mt-8 grid grid-cols-1 gap-5 ${
          compact ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
        }`}
        variants={staggerContainer(0.08, 0)}
        initial="hidden"
        animate={gridInView ? "show" : "hidden"}
      >
        {repos.length === 0 && (
          <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-12 text-center text-sm text-slate-500">
            No repositories using {selectedTool} in this language yet.
          </div>
        )}
        {visibleRepos.map((repo, index) => {
          const cardTheme = languageStyles[repo.sourceLanguage] || defaultLanguageTheme;
          const technologyBadges = getTechnologyBadges(repo);
          const primaryTechnology = technologyBadges[0];
          const supportingTechnologies = technologyBadges.slice(1);
          const primaryColor = technologyColors[primaryTechnology] || cardTheme.accent;

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
                  className="shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide"
                  style={{
                    borderColor: `${primaryColor}66`,
                    backgroundColor: `${primaryColor}14`,
                    color: primaryColor,
                  }}
                >
                  {primaryTechnology}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{repo.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${repo.name} technologies`}>
                {supportingTechnologies.map((technology) => {
                  const badgeColor = technologyColors[technology] || cardTheme.accent;
                  return (
                    <li
                      key={technology}
                      className="rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wide"
                      style={{
                        borderColor: `${badgeColor}66`,
                        backgroundColor: `${badgeColor}14`,
                        color: badgeColor,
                      }}
                    >
                      {technology}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-600">
                {repo.lastUpdated}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {hasMoreRepos && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            Showing {visibleRepos.length} of {repos.length} projects
          </p>
          <button
            type="button"
            onClick={() => setVisibleRows((current) => current + 5)}
            className="rounded-full border border-sky-400/40 bg-sky-400/10 px-7 py-3 text-sm font-bold text-sky-200 shadow-[0_0_24px_rgba(56,189,248,0.12)] transition hover:-translate-y-0.5 hover:border-sky-300/70 hover:bg-sky-400/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Show more projects
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default GithubShowcase;
