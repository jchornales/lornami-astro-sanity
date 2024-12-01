import clsx from "clsx";
import React from "react";
import StaggerText from "react-stagger-text";

interface StaggeredTextProps {
  text: string;
  delay?: number;
  duration?: number;
  type?: "word" | "letter";
  easing?: string;
  staggerDelay?: number;
  className?: string;
  shouldStart?: boolean;
}

function StaggeredText({
  text,
  delay,
  duration,
  type,
  easing,
  staggerDelay,
  className,
  shouldStart,
}: Readonly<StaggeredTextProps>) {
  return (
    <span className={clsx(className, "text-white")}>
      <StaggerText
        staggerDuration={duration || 100}
        staggerType={type || "letter"}
        startDelay={delay || 0}
        staggerDelay={staggerDelay || 0.04}
        staggerEasing={easing || "ease-in"}
        shouldStart={shouldStart || true}
      >
        {text}
      </StaggerText>
    </span>
  );
}

export default StaggeredText;
