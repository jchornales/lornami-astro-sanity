import "@styles/Navigation.css";
import BrandLogo from "@/components/react/navigation/BrandLogo";
import { Button } from "@/lib/ui/button";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useStore } from "@nanostores/react";
import {
  isMenuOpen,
  isNavigationBackgroundTransparent,
} from "@/lib/hooks/useStateStore";
import clsx from "clsx";
import { useEffect, useLayoutEffect, useState } from "react";
import BookingForm from "../common/BookingForm";
import TypewriterComponent from "typewriter-effect";
import { WELCOME_MESSAGE } from "@/lib/constants/welcomeMessage";

interface NavigationProps {
  cover: string;
  disableTransform: boolean;
  title?: string;
}

function Navigation({
  cover,
  disableTransform,
  title,
}: Readonly<NavigationProps>) {
  const isOpen = useStore(isMenuOpen);
  const isBackroundTransparent = useStore(isNavigationBackgroundTransparent);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(false);

  useLayoutEffect(() => {
    const lastShownTime = localStorage.getItem("messageLastShown");
    const now = Date.now();

    if (
      !lastShownTime ||
      now - parseInt(lastShownTime, 10) > WELCOME_MESSAGE.MESSAGE_INTERVAL
    ) {
      setShowWelcomeScreen(true);
      localStorage.setItem("messageLastShown", now.toString());
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        isNavigationBackgroundTransparent.set(true);
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
        <div className="mx-auto grid h-full w-full max-w-6xl place-items-center text-center font-optitomaso text-7xl">
          {title === "Home" && showWelcomeScreen ? (
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
                  .typeString(title ?? "")
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    setIsLoaded(true);
                  })
                  .changeDelay(5)
                  .changeDeleteSpeed(2)
                  .start();
              }}
            />
          )}
        </div>
      </div>
      <div
        className={clsx(
          "navigation-bar",
          isBackroundTransparent
            ? "bg-transparent"
            : "bg-primary bg-opacity-85",
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
                isBackroundTransparent && !disableTransform ? "light" : "dark",
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
