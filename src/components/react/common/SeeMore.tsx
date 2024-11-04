import { shouldSeeMore } from "@/lib/hooks/useStateStore";
import React, { useEffect } from "react";

function SeeMore() {
  const handleClick = () => {
    const highlightSection = document.getElementById("highlight-section");
    shouldSeeMore.set(true);
    if (highlightSection) {
      highlightSection.style.height = "unset";
    }
  };

  return (
    <div className="gallery-see-more">
      <button className="group flex gap-2" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default SeeMore;
