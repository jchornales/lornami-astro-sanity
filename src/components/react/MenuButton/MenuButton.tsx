import React, { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../../sanity/lib/useStateStore";
import "./MenuButton.css";

function MenuButton() {
  const isOpen = useStore(isMenuOpen);

  return (
    <button
      className={`menu-button group ${isOpen ? "opened" : "closed"}`}
      onClick={() => isMenuOpen.set(!isOpen)}
    >
      <span className="line --first"></span>
      <span className="line --second"></span>
      <span className="line --third"></span>
    </button>
  );
}

export default MenuButton;
