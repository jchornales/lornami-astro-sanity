import React from "react";
import { useStore } from "@nanostores/react";
import "@styles/Menu.css";
import { isMenuOpen } from "../../sanity/lib/useStateStore";
import type { SanityDocument } from "@sanity/client";
import { useUrlForImage } from "../../sanity/lib/useUrlForImage";
import { clsx } from "clsx";

interface Props {
  cover: SanityDocument;
}

function Menu({ cover }: Props) {
  const isOpen = useStore(isMenuOpen);

  return (
    <div className={clsx("menu-wrapper", isOpen ? "visible" : "invisible")}>
      <div className="menu-overlay --first"></div>
      <div className="menu-overlay --second">
        <img
          className="overlay-image"
          src={useUrlForImage(cover.image).url()}
        />
      </div>
      <div className="menu-overlay --third">
        <ul className="menu-list">
          <li className="menu-link">
            <a href="/about" className="link">
              About us
            </a>
          </li>
          <li className="menu-link">
            <a href="/gallery" className="link">
              Our Team
            </a>
          </li>
          <li className="menu-link">
            <a href="/our-team" className="link">
              Gallery
            </a>
          </li>
          <li className="menu-link">
            <a href="/our-clients" className="link">
              Our Clients
            </a>
          </li>
          <li className="menu-link">
            <a href="/contact-us" className="link">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
