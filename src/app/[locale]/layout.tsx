// General imports

import type { Metadata } from "next";
import { Inter, Sour_Gummy } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

// i18n

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "next-intl";

// Fonts

const accentFont = Sour_Gummy({
  variable: "--font-accent",
  subsets: ["latin"],
});

const baseFont = Inter({
  variable: "--font-base",
  subsets: ["latin"],
});

// Metadata

export const metadata: Metadata = {
  title: "Amigos do Abrigo João Rosa",
  description:
    "ONG Amigos do Abrigo: proteção, resgate e adoção responsável de animais em situação de vulnerabilidade",
};

// Layout

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
        className={`${accentFont.variable} ${baseFont.variable} antialiased relative flex flex-col overflow-x-hidden h-screen max-w-screen`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
