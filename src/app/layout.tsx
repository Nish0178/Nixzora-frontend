import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

import { LoadingProvider } from "@/context/LoadingContext";
import LoadingWrapper from "@/components/common/LoadingWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nixzora | Elevating Everyday Clothing",
  description: "Premium fashion by NIXZORA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingProvider>
          <LoadingWrapper />

          <AnnouncementBar />
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

        </LoadingProvider>
      </body>
    </html>
  );
}