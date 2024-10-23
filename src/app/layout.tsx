import type { Metadata } from "next";
import localFont from "next/font/local";
import Background from "./components/background"
import Footer from "./components/footer"
import Navbar from "./components/navbar";
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${isabellaItalic.variable} antialiased`}>
        <Background />
          <Navbar />
        <div className="gradient-blur">
          {children}
        </div>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
