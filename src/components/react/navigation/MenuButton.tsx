import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import "@styles/MenuButton.css";
import clsx from "clsx";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { isBackgroundDark, isMenuOpen } from "@/lib/utils/useStateStore";

function MenuButton() {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isBackgroundDark);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
      isBackgroundDark.set(false);
    } else {
      isBackgroundDark.set(true);
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
        shouldTransformNav ? "light" : "dark",
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
