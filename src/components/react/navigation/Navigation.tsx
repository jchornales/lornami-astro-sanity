import "@styles/Navigation.css";
import BrandLogo from "@/components/react/navigation/BrandLogo";
import { Button } from "@/lib/ui/button";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useStore } from "@nanostores/react";
import { isBackgroundDark, isMenuOpen } from "@/lib/hooks/useStateStore";
import clsx from "clsx";
import { useEffect, useState } from "react";
import _ from "lodash";
import BookingForm from "../common/BookingForm";
import TypewriterComponent from "typewriter-effect";

interface NavigationProps {
  cover: string;
  disableTransform: boolean;
  title?: string;
}

function Navigation({ cover, disableTransform, title }: NavigationProps) {
  const isOpen = useStore(isMenuOpen);
  const shouldTransformNav = useStore(isBackgroundDark);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        isBackgroundDark.set(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = "auto";
    }
  }, [isLoaded]);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 z-50 h-full w-full bg-primary transition-all duration-1000",
          isLoaded ? "-right-full" : "right-0",
        )}
      >
        <div className="grid h-full w-full place-items-center font-optitomaso text-7xl">
          {title === "Home" ? (
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Framing emotions")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Preserving memories")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Celebrating every story")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setIsLoaded(true);
                  })
                  .changeDelay(10)
                  .changeDeleteSpeed(10)
                  .start();
              }}
            />
          ) : (
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(title || "")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setIsLoaded(true);
                  })
                  .changeDelay(10)
                  .changeDeleteSpeed(10)
                  .start();
              }}
            />
          )}
        </div>
      </div>
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
          <BookingForm>
            <Button
              variant="link"
              className={clsx(
                "nav book-now",
                isOpen && "opened",
                shouldTransformNav && !disableTransform ? "light" : "dark",
              )}
            >
              BOOK NOW
            </Button>
          </BookingForm>
          <MenuButton disableTransform={disableTransform} />
        </div>
        <Menu cover={cover} />
      </div>
    </>
  );
}

export default Navigation;
