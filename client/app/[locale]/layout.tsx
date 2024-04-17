import type { Metadata } from "next";
import { Ubuntu_Mono, Gugi } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700'],
  variable: '--font-main',
  display: 'swap'
});

const gugi = Gugi({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-date',
  display: 'swap'
});


export const metadata: Metadata = {
  title: "German Tsyganov",
  description: "Portfolio",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={`${ubuntuMono.variable} ${gugi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
