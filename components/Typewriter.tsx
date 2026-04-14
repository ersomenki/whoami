"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    intervalRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1));
        index++;
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
        onComplete?.();
      }
    }, speed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [started, text, speed, onComplete]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span className={showCursor ? "opacity-100" : "opacity-0"}>█</span>
    </span>
  );
}
