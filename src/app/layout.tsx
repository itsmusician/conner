import type { Metadata } from "next";
import localFont from "next/font/local";
import Background from "./components/background"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const isabellaItalic = localFont({
  src: "./fonts/isabella-sans.italic.ttf",
  variable: "--font-isabella-italic",
  weight: "100 900",
});

const hanken = localFont({
  src: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Conner",
  description: "hi :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="civiltwilight">
      <body className={`${geistSans.variable} ${geistMono.variable} ${isabellaItalic.variable} ${hanken.variable} antialiased`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
