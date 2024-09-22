import { useStore } from "@nanostores/react";
import React from "react";
import { isMenuOpen } from "../../utils/useStateStore";
import "@styles/BrandLogo.css";
import clsx from "clsx";

function BrandLogo() {
  const isOpen = useStore(isMenuOpen);
  return (
    <a href="/" className={clsx("brand-label", isOpen && "opened")}>
      LORNAMI
    </a>
  );
}

export default BrandLogo;
