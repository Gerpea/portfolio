import type { Metadata } from "next";
import { Ubuntu_Mono, Gugi } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntuMono.variable} ${gugi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
