"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "Procedimentos", href: "/procedimentos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="header-logo">
              <Image
                src="/images/logo/logo-mini.png"
                alt="Logo Dra. Viviane Seguro"
                width={54}
                height={54}
                className="header-logo-img"
                priority
              />
              <div className="header-logo-copy">
                <span className="header-logo-title">Biomédica Esteta</span>
                <span className="header-logo-subtitle">Porto Alegre</span>
              </div>
            </Link>

            <button
              className="menu-toggle"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        links={MENU_LINKS}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
