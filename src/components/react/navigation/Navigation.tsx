import "@styles/Navigation.css";
import BrandLogo from "@/components/react/navigation/BrandLogo";

import { Button } from "@/lib/ui/button";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useStore } from "@nanostores/react";
import { isBackgroundDark, isMenuOpen } from "@/lib/utils/useStateStore";
import clsx from "clsx";
import type { GetImageResult } from "astro";
import { useEffect, useState } from "react";

interface NavigationProps {
  cover: GetImageResult;
}

function Navigation({ cover }: NavigationProps) {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isBackgroundDark);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      isBackgroundDark.set(entry.isIntersecting);
    });

    const targetElement = document.querySelector(".hero-section");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [shouldTransformNav]);

  return (
    <>
      <div className="navigation-bar">
        <div className="z-40 w-1/2">
          <BrandLogo />
        </div>
        <div className="nav right-column">
          <Button
            variant="link"
            className={clsx(
              "nav book-now",
              isOpen && "open",
              shouldTransformNav ? "light" : "dark",
            )}
          >
            <a className="mix-blend-difference" href="/">
              BOOK NOW
            </a>
          </Button>
          <MenuButton />
        </div>
        <Menu cover={cover} />
      </div>
    </>
  );
}

export default Navigation;
