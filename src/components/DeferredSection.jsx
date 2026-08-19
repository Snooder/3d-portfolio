import React, { Suspense, useEffect, useRef, useState } from "react";

const DeferredSection = ({ children, minHeight = 700 }) => {
  const [ready, setReady] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={ready ? undefined : { minHeight }}>
      {ready && (
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight }} />}>
          {children}
        </Suspense>
      )}
    </div>
  );
};

export default DeferredSection;
