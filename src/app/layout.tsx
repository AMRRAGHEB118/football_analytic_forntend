import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['greek'],
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
        </body>
      </html>
    </>
  );
}
