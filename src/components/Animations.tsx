"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function AnimatedRoutes({
  className,
  lineColor,
}: {
  className?: string;
  lineColor: string;
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
          <Link className="leading-7 inline-block" href={slug}>
            {label}
            <div
              className={`${
                pathname === slug ? "w-full" : "w-0"
              } bg-[${lineColor}] h-1 rounded-full group-hover:w-full transition-all duration-500 ease-in-out`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
