import type { Metadata } from "next";
import { Ubuntu_Mono, Gugi } from "next/font/google";
import "./globals.css";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700'],
  variable: '--main-font'
});

const gugi = Gugi({
  subsets: ["latin"],
  weight: '400',
  variable: '--date-font'
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
    <html lang="en">
      <body className={ubuntuMono.className}>{children}</body>
    </html>
  );
}
