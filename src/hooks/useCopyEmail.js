import { useEffect, useRef, useState } from "react";

export const EMAIL_ADDRESS = "matthew.swe.snyder@gmail.com";

const copyWithFallback = async (value) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
};

const useCopyEmail = (confirmationDuration = 2000) => {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  const copyEmail = async () => {
    try {
      await copyWithFallback(EMAIL_ADDRESS);
      setCopied(true);
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = window.setTimeout(() => setCopied(false), confirmationDuration);
    } catch {
      setCopied(false);
    }
  };

  return { copied, copyEmail, email: EMAIL_ADDRESS };
};

export default useCopyEmail;
