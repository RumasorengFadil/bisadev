import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// import '../styles/_variables.scss';
import '../styles/_keyframe-animations.scss';
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';
import { Auth } from "@/typdata/auth";
import { getAuthFromSever } from "@/utils/getAuthFromServer";
import HydrateAuth from "@/components/HydrateAuth";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Bbyts",
  description: "Solusi digital untuk bisnis Anda",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth: Auth = await getAuthFromSever();

  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YSMHC0TP8H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YSMHC0TP8H');`
          }
        </Script>

        <Toaster />

        <Suspense fallback={null}>
          <NextTopLoader color="hsl(46, 100%, 51%)" height={2} />
        </Suspense>
        <HydrateAuth auth={auth} />

        {children}
      </body>
    </html>
  );
}
