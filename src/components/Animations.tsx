"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function AnimatedRoutes({
  className,
  lineColor,
  hoverColor,
}: {
  className?: string;
  lineColor: string;
  hoverColor: string;
}) {
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
            className={`leading-7 hover:text-[${hoverColor}] transition-colors duration-500 ease-in-out`}
            href={slug}
          >
            {label}
          </Link>
          <div
            className={`${
              pathname === slug ? "w-full" : "w-0"
            } bg-[${lineColor}] h-1 w-0 rounded-full group-hover:w-full transition-all duration-500 ease-in-out`}
          ></div>
        </li>
      ))}
    </ul>
  );
}
