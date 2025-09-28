"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Link } from "@/i18n/navigation";

import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Header() {
  const lastScrollY = useRef(0);
  const [isMobileHeaderHidden, setIsMobileHeaderHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (lastScrollY.current < currentScrollY && currentScrollY > 10) {
        setIsMobileHeaderHidden(true);
      } else {
        setIsMobileHeaderHidden(false);
      }

      setIsAtTop(currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-16 md:h-20 w-full z-50 transition-all duration-500 ease-in-out text-[var(--yellow-base)] accent-font  ${
        isAtTop ? "bg-transparent shadow-none" : "bg-white shadow-md"
      } ${isMobileHeaderHidden ? "-translate-y-full" : ""} md:-translate-y-0`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-7xl px-4 mx-auto ">
        <Link href="/" className="relative w-16 h-16 border-base overflow-clip">
          <Image
            src="/images/logo.png"
            alt="Logo e homepage deAmigos do Abrigo João Rosa"
            fill
            className="object-cover"
          />
        </Link>
        <Navbar className="hidden md:flex gap-4 bg-white px-4 py-1 border-base" />
        <HamburgerMenu className="md:hidden bg-[var(--base-color)]/80 rounded-sm" />
      </div>
    </header>
  );
}
