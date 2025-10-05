import React from "react";
import { Link } from "@/i18n/navigation";

type ButtonProps =
  | ({
      children: React.ReactNode;
      as?: "button";
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      children: React.ReactNode;
      as: "a";
      href: string;
    } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button({
  children,
  className,
  as = "button",
  ...props
}: ButtonProps) {
  const baseStyle =
    "cursor-pointer px-4 py-2.5 text-lg accent-font shadow-[0_3px_8px_rgba(0,0,0,0.24)] whitespace-nowrap border-base hover:scale-105 transition duration-500 ease-in-out";

  if (as === "a") {
    const { href, ...rest } =
      props as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      };

    return (
      <Link href={href} {...rest} className={`${baseStyle} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyle} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
