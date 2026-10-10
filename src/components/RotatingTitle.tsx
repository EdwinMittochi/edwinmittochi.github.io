
"use client";

import { useEffect, useState } from "react";

type RotatingTitleProps = {
  titles?: string[];
  secondsPerTitle?: number;
};

const defaultTitles = [
  "COMPUTER SCIENTIST",
  "DEVELOPER",
  "IT PROFESSIONAL",
];

export default function RotatingTitle({
  titles = defaultTitles,
  secondsPerTitle = 3,
}: RotatingTitleProps) {
  const safeTitles = titles.filter((title) => title.trim().length > 0);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"enter" | "visible" | "exit">("enter");

  const duration = Math.max(secondsPerTitle, 1) * 1000;

  useEffect(() => {
    if (safeTitles.length <= 1) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "enter") {
      timeout = setTimeout(() => setPhase("visible"), 30);
    } else if (phase === "visible") {
      timeout = setTimeout(() => setPhase("exit"), duration - 500);
    } else {
      timeout = setTimeout(() => {
        setIndex((current) => (current + 1) % safeTitles.length);
        setPhase("enter");
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [phase, index, duration, safeTitles.length]);

  if (safeTitles.length === 0) return null;

  return (
    <div
      className="relative h-[1.6em] w-full overflow-hidden text-center text-[clamp(0.8rem,4.5vw,1.25rem)] font-bold tracking-[0.08em] text-accent md:text-left"
      aria-label={safeTitles.join(", ")}
    >
      <span
        key={index}
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-start whitespace-nowrap text-left ${
  phase === "enter"
    ? "translate-y-full opacity-0"
    : phase === "exit"
      ? "-translate-y-full opacity-0"
      : "translate-y-0 opacity-100"
} transition-all duration-500 ease-in-out motion-reduce:transition-none`}
      >
        {safeTitles[index % safeTitles.length]}
      </span>
    </div>
  );
}