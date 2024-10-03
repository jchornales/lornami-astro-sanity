import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../lib/utils/useStateStore";
import "@styles/MenuButton.css";
import clsx from "clsx";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

function MenuButton() {
  const isOpen = useStore(isMenuOpen);

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
      className={clsx("menu-button group", isOpen ? "opened" : "closed")}
      onClick={() => isMenuOpen.set(!isOpen)}
    >
      <span className="line --first"></span>
      <span className="line --second"></span>
      <span className="line --third"></span>
    </button>
  );
}

export default MenuButton;
