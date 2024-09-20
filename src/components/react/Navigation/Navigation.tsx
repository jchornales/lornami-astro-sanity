import React from "react";
import MenuButton from "../MenuButton/MenuButton";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../../sanity/lib/useStateStore";
import "./Navigation.css";

function Navigation() {
  const $isMenuOpen = useStore(isMenuOpen);
  return (
    <nav className="navigation-bar">
      <div className="w-1/2">
        <a href="/" className={`brand-label ${$isMenuOpen && "opened"}`}>
          LORNAMI
        </a>
      </div>
      <div className="flex w-1/2 justify-end align-middle">
        <MenuButton />
      </div>
    </nav>
  );
}

export default Navigation;
