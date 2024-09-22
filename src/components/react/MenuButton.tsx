import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../sanity/lib/useStateStore";
import "@styles/MenuButton.css";
import clsx from "clsx";

function MenuButton() {
  const isOpen = useStore(isMenuOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflowY = "scroll";
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
