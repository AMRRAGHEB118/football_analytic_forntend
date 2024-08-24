import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={`${inter.className} min-h-screen bg-secondary-1100`}>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
}
