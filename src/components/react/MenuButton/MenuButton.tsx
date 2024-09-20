import React from "react";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../../sanity/lib/useStateStore";
import "./MenuButton.css";

function MenuButton() {
  const $isCartOpen = useStore(isMenuOpen);
  return (
    <button
      className={`menu-button group ${$isCartOpen ? "opened" : "closed"}`}
      onClick={() => isMenuOpen.set(!$isCartOpen)}
    >
      <span className="line --first"></span>
      <span className="line --second"></span>
      <span className="line --third"></span>
    </button>
  );
}

export default MenuButton;
