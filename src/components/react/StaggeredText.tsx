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
}

function StaggeredText({
  text,
  delay,
  duration,
  type,
  easing,
  staggerDelay,
  className,
}: StaggeredTextProps) {
  return (
    <span className={clsx(className, "text-white")}>
      <StaggerText
        staggerDuration={duration}
        staggerType={type || "letter"}
        startDelay={delay}
        staggerDelay={staggerDelay}
        staggerEasing={easing}
      >
        {text}
      </StaggerText>
    </span>
  );
}

export default StaggeredText;
