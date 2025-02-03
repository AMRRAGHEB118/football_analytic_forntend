import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/Header";
import {ABeeZee} from 'next/font/google'
import { Outfit } from 'next/font/google'
import Footer from "./components/shared/Footer";

const roboto = Outfit({
  weight: 'variable',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: "Football Analytics",
  description: "Football Analytics aims to help football fans to analyze their favorite teams and players and league.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${roboto.className} min-h-screen bg-neutral-900 antialiased`}>
          <Header />
          <div className="mt-[70px]">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
