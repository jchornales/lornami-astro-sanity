import "@styles/Navigation.css";
import BrandLogo from "@/components/react/navigation/BrandLogo";

import { Button } from "@/lib/ui/button";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useStore } from "@nanostores/react";
import { isBackgroundDark, isMenuOpen } from "@/lib/utils/useStateStore";
import clsx from "clsx";
import type { GetImageResult } from "astro";
import { useEffect, useInsertionEffect } from "react";
import _ from "lodash";

interface NavigationProps {
  cover: GetImageResult;
  disableTransform: boolean;
}

const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0, // Trigger callback when any part of the target is visible
};

function Navigation({ cover, disableTransform }: NavigationProps) {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isBackgroundDark);

  useInsertionEffect(() => {
    isBackgroundDark.set(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const isInView = _.some(entries, { isIntersecting: true });
      isBackgroundDark.set(isInView);
    }, observerOptions);

    const targetElement = document.querySelectorAll("[data-attribute='dark']");
    targetElement.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      targetElement.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [shouldTransformNav]);

  return (
    <>
      <div
        className={clsx(
          "navigation-bar",
          shouldTransformNav ? "bg-transparent" : "bg-primary bg-opacity-85",
          disableTransform && "bg-primary bg-opacity-85 lg:bg-transparent",
        )}
      >
        <div className="z-40 flex w-1/2 items-center">
          <BrandLogo disableTransform={disableTransform} />
        </div>
        <div className="nav right-column">
          <Button
            variant="link"
            className={clsx(
              "nav book-now",
              isOpen && "opened",
              shouldTransformNav && !disableTransform ? "light" : "dark",
            )}
          >
            <a className="mix-blend-difference" href="/">
              BOOK NOW
            </a>
          </Button>
          <MenuButton disableTransform={disableTransform} />
        </div>
        <Menu cover={cover} />
      </div>
    </>
  );
}

export default Navigation;
