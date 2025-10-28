"use client";

import {
  Facebook,
  X,
  WhatsApp,
  AttachEmail,
  Instagram,
} from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";

const iconStyle = {
  fontSize: "2.4rem",
  color: "var(--white-base)",
  "&:hover": {
    color: "var(--yellow-base)",
    cursor: "pointer",
    transform: "translateY(-4px)",
  },
  transition: "all 0.3s ease-in-out",
};

export default function SocialMediaLinks({
  position,
}: {
  position: "flex" | "fixed";
}) {
  const [showContent, setShowContent] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setShowContent(false);
      }, 3000);
      setShowContent(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <ul
      className={
        position === "flex"
          ? "flex flex-wrap md:max-w-[8rem]"
          : showContent
          ? "scale-75 fixed top-1/2 right-0 transform duration-300 ease-in-out -translate-y-1/2 z-40 bg-white py-2 px-1 rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
          : " translate-x-[100%] scale-75 fixed top-1/2 right-0 transform duration-300 ease-in-out -translate-y-1/2 z-40 bg-white py-2 px-1 rounded-3xl shadow-[0_3px_8px_rgba(0,0,0,0.24)]"
      }
    >
      <li>
        <a href="https://x.com/abrigojoaorosa" target="_blank" rel="noreferrer">
          <X sx={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/abrigojoaorosa/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram sx={iconStyle} />
        </a>
      </li>
      <li>
        <a
          href="https://web.facebook.com/abrigo.joaorosa"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook sx={iconStyle} />
        </a>
      </li>
      <li>
        <a href="https://wa.me/5521989525337" target="_blank" rel="noreferrer">
          <WhatsApp sx={iconStyle} />
        </a>
      </li>
    </ul>
  );
}
