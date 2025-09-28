"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function AnimatedRoutes({ className }: { className?: string }) {
  const pathname = usePathname();

  const links = useTranslations().raw("Navbar") as {
    label: string;
    slug: string;
  }[];

  return (
    <ul className={`${className}`}>
      {links.map(({ label, slug }) => (
        <li key={label} className="group">
          <Link
            className="leading-8 hover:text-[var(--blue-base)] transition-colors duration-500 ease-in-out"
            href={slug}
          >
            {label}
          </Link>
          <div
            className={`${
              pathname === slug ? "w-full" : "w-0"
            } bg-[var(--blue-base)] h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-in-out`}
          ></div>
        </li>
      ))}
    </ul>
  );
}
