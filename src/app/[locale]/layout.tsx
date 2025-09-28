// i18n

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "next-intl";

import type { Metadata } from "next";
import { Inter, Sour_Gummy } from "next/font/google";
import "./globals.css";

const accentFont = Sour_Gummy({
  variable: "--font-accent",
  subsets: ["latin"],
});

const baseFont = Inter({
  variable: "--font-base",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amigos do Abrigo João Rosa",
  description:
    "ONG Amigos do Abrigo: proteção, resgate e adoção responsável de animais em situação de vulnerabilidade",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} key={locale} suppressHydrationWarning={true}>
      <body
        className={`${accentFont.variable} ${baseFont.variable} antialiased relative flex flex-col overflow-x-clip h-screen max-w-screen`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
