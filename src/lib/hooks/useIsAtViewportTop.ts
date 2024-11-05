import React, { useCallback, useEffect, useState, type RefObject } from "react";

interface UseIsAtViewportTopOptions {
  offset?: number;
}

function useIsAtViewportTop<T extends HTMLElement>(
  ref: RefObject<T>,
  options: UseIsAtViewportTopOptions = {},
): boolean {
  const { offset } = options;
  const [isAtTop, setIsAtTop] = useState<boolean>(false);

  const checkPosition = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();
    const isElementAtTop = rect.top <= (offset ? offset : 100);

    setIsAtTop(isElementAtTop);
  }, [ref, offset]);

  useEffect(() => {
    checkPosition();

    window.addEventListener("scroll", checkPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, [checkPosition]);

  return isAtTop;
}

export default useIsAtViewportTop;
