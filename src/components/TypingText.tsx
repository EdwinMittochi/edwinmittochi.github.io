
"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
};

export default function TypingText({
  text,
  speed = 100,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span
        className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent"
        aria-hidden="true"
      />
    </span>
  );
}