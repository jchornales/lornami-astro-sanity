import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import "@styles/MenuButton.css";
import clsx from "clsx";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import {
  isNavigationBackgroundTransparent,
  isMenuOpen,
} from "@/lib/hooks/useStateStore";

interface MenuButtonProps {
  disableTransform: boolean;
}

function MenuButton({ disableTransform }: Readonly<MenuButtonProps>) {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isNavigationBackgroundTransparent);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      setTimeout(() => {
        clearAllBodyScrollLocks();
      }, 800);
    }
  }, [isOpen]);

  return (
    <button
      className={clsx(
        "menu-button group",
        isOpen ? "opened" : "closed",
        shouldTransformNav && !disableTransform ? "light" : "dark",
      )}
      onClick={() => isMenuOpen.set(!isOpen)}
    >
      <span className="line --first"></span>
      <span className="line --second"></span>
      <span className="line --third"></span>
    </button>
  );
}

export default MenuButton;
