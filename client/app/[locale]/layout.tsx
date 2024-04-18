import type { Metadata } from "next";
import { Ubuntu_Mono,  Ubuntu, Gugi } from "next/font/google";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700'],
  variable: '--font-main',
  display: 'swap'
});

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700'],
  variable: '--font-name',
  display: 'swap'
});

const gugi = Gugi({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-date',
  display: 'swap'
});


export async function generateMetadata({ params: { locale } }: { params: { locale: string }; }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const revalidate = 10

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} className={`${ubuntuMono.variable} ${ubuntu.variable} ${gugi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
