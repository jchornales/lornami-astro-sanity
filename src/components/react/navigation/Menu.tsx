import React from "react";
import { useStore } from "@nanostores/react";
import "@styles/Menu.css";
import { isMenuOpen } from "@/lib/hooks/useStateStore";
import { clsx } from "clsx";
import type { GetImageResult } from "astro";

interface Props {
  cover: string;
}

const menuList = [
  {
    label: "About us",
    href: "/about-us",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact us",
    href: "/contact-us",
  },
];

function Menu({ cover }: Props) {
  const isOpen = useStore(isMenuOpen);

  return (
    <div className={clsx("menu-wrapper", isOpen ? "visible" : "invisible")}>
      <div className="menu-overlay --first"></div>
      <div
        className="menu-overlay --second"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="menu-overlay --third">
        <ul className="menu-list">
          {menuList.map((link) => (
            <li key={link.label} className="menu-link">
              <a href={link.href} className="link" aria-label={link.label}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
