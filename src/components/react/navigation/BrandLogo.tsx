import { useStore } from "@nanostores/react";
import React from "react";
import "@styles/BrandLogo.css";
import clsx from "clsx";
import { isBackgroundDark, isMenuOpen } from "@/lib/hooks/useStateStore";

interface BrandLogoProps {
  disableTransform: boolean;
}

function BrandLogo({ disableTransform }: BrandLogoProps) {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isBackgroundDark);
  return (
    <a
      href="/"
      className={clsx(
        "brand-label",
        isOpen && "opened",
        shouldTransformNav && !disableTransform ? "light" : "dark",
      )}
    >
      LORNAMI
    </a>
  );
}

export default BrandLogo;
