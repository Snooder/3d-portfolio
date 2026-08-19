import React, { useEffect, useRef, useState } from "react";

const snippets = [
  {
    language: "JavaScript",
    file: "pipeline.js",
    color: "#facc15",
    code: "const active = events.filter(Boolean);\nconst result = active.map(transform);\nawait publish(result);",
  },
  {
    language: "TypeScript",
    file: "events.ts",
    color: "#60a5fa",
    code: "interface UserEvent {\n  id: string;\n  secure: boolean;\n}\nconst queue: UserEvent[] = [];",
  },
  {
    language: "Go",
    file: "worker.go",
    color: "#22d3ee",
    code: "func process(queue chan Job) {\n  for job := range queue {\n    go run(job)\n  }\n}",
  },
  {
    language: "Python",
    file: "model.py",
    color: "#fbbf24",
    code: "def predict(records):\n    clean = normalize(records)\n    return model.predict(clean)",
  },
  {
    language: "SQL",
    file: "metrics.sql",
    color: "#38bdf8",
    code: "SELECT user_id, COUNT(*) AS events\nFROM activity\nWHERE created_at >= NOW() - INTERVAL '1 day'\nGROUP BY user_id;",
  },
  {
    language: "Shell",
    file: "deploy.sh",
    color: "#4ade80",
    code: "$ docker build -t app:latest .\n$ terraform plan\n$ ./deploy --safe --region us-east-1",
  },
  {
    language: "Java",
    file: "Service.java",
    color: "#fb7185",
    code: "public Result execute(Input input) {\n  validate(input);\n  return repository.save(input);\n}",
  },
  {
    language: "C",
    file: "socket.c",
    color: "#cbd5e1",
    code: "int socket_fd = socket(AF_INET, SOCK_STREAM, 0);\nif (socket_fd < 0) {\n  return EXIT_FAILURE;\n}",
  },
];

const verticalBands = [0.5, 10, 21, 33, 45, 57, 68, 78, 87, 92];
const edgeBands = [0, 79, 3, 82, 1, 76, 5, 84, 2, 74];

const makeTerminal = (id, index = Math.floor(Math.random() * snippets.length), band = null, initial = false) => {
  const snippet = snippets[index % snippets.length];

  return {
    id,
    snippet,
    left: band === null
      ? (Math.random() > 0.5 ? Math.random() * 8 : 74 + Math.random() * 11)
      : edgeBands[band % edgeBands.length],
    top: band === null ? Math.random() * 92 : verticalBands[band % verticalBands.length],
    width: 225 + Math.round(Math.random() * 115),
    initialTyped: initial ? Math.round(snippet.code.length * (0.18 + Math.random() * 0.25)) : 0,
    life: 3,
    initial,
  };
};

const GithubTerminalBackground = () => {
  const [terminals, setTerminals] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () => typeof document === "undefined" || document.visibilityState !== "hidden",
  );
  const containerRef = useRef(null);
  const nextId = useRef(0);
  const codeNodesRef = useRef(new Map());
  const typingProgressRef = useRef(new Map());
  const paused = !sectionVisible || !pageVisible;

  useEffect(() => {
    setTerminals(
      Array.from({ length: 10 }, (_, index) => makeTerminal(nextId.current += 1, index, index, true)),
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setSectionVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => setPageVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (paused) return undefined;

    const typingTimer = window.setInterval(() => {
      terminals.forEach((terminal) => {
        const current = typingProgressRef.current.get(terminal.id) ?? terminal.initialTyped;
        if (current >= terminal.snippet.code.length) return;
        const next = Math.min(current + 1, terminal.snippet.code.length);
        typingProgressRef.current.set(terminal.id, next);
        const codeNode = codeNodesRef.current.get(terminal.id);
        if (codeNode) codeNode.textContent = terminal.snippet.code.slice(0, next);
      });
    }, 20);

    return () => window.clearInterval(typingTimer);
  }, [paused, terminals]);

  useEffect(() => {
    if (paused) return undefined;

    const spawnTimer = window.setInterval(() => {
      setTerminals((current) => [
        ...current.slice(-10),
        makeTerminal(nextId.current += 1),
      ]);
    }, 750);

    return () => window.clearInterval(spawnTimer);
  }, [paused]);

  const removeTerminal = (id) => {
    codeNodesRef.current.delete(id);
    typingProgressRef.current.delete(id);
    setTerminals((current) => current.filter((terminal) => terminal.id !== id));
  };

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      data-terminals-paused={paused ? "true" : "false"}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,197,94,.08),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(59,130,246,.1),transparent_38%)]" />

      {terminals.map((terminal) => (
        <div
          key={terminal.id}
          className={`github-terminal z-10 ${terminal.initial ? "github-terminal--initial" : ""}`}
          style={{
            left: `${terminal.left}%`,
            top: `${terminal.top}%`,
            width: terminal.width,
            "--terminal-life": `${terminal.life}s`,
            "--terminal-accent": terminal.snippet.color,
          }}
          onAnimationEnd={() => removeTerminal(terminal.id)}
        >
          <div className="github-terminal__bar">
            <span className="bg-rose-400" />
            <span className="bg-amber-300" />
            <span className="bg-emerald-400" />
            <strong>{terminal.snippet.file}</strong>
            <em>{terminal.snippet.language}</em>
          </div>
          <pre>
            <code
              ref={(node) => {
                if (node) {
                  codeNodesRef.current.set(terminal.id, node);
                  if (!typingProgressRef.current.has(terminal.id)) {
                    typingProgressRef.current.set(terminal.id, terminal.initialTyped);
                  }
                } else {
                  codeNodesRef.current.delete(terminal.id);
                }
              }}
            >
              {terminal.snippet.code.slice(0, terminal.initialTyped)}
            </code>
            <span className="github-terminal__cursor" />
          </pre>
        </div>
      ))}

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(5,8,22,.04)_0%,rgba(5,8,22,.16)_72%,rgba(5,8,22,.28)_100%)]" />
    </div>
  );
};

export default GithubTerminalBackground;
