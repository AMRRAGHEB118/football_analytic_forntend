import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/shared/Header";
import { Roboto } from 'next/font/google'
import Footer from "./components/shared/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['greek-ext'],
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
        <body className={`${roboto.className} min-h-screen bg-secondary-1100`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
