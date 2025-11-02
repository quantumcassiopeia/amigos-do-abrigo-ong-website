"use client";

import { Facebook, X, WhatsApp, Instagram } from "@mui/icons-material";

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
  position: "block" | "bounce";
}) {
  return (
    <ul
      className={
        position === "block"
          ? "flex flex-wrap md:max-w-[8rem]"
          : "flex pt-10 gap-14 spin-bounce"
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
