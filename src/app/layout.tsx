import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import '../styles/_keyframe-animations.scss';
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "sonner";
import { PreferencesStoreProvider } from "@/context/stores/preferences-provider";
import { ReactQueryProvider } from "@/context/providers/react-query.provider";
import { AuthBootstrap } from "@/context/providers/AuthBootstrap";
import { ENV } from "@/features/auth/types/env.type";
import Construction from "@/components/Construction";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const auth: Auth = await getAuthFromSever();
  const themeMode = "light";
  const themePreset = "default";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BisaDev",
    url: "https://bisadev.id",
    logo: "https://bisadev.id/images/app/og-image.png",
    sameAs: [
      "https://www.linkedin.com/company/abhiparaya-mahardika/",
      "https://www.instagram.com/bisadevid/",
      "https://www.tiktok.com/@bisadev.id",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+6285178137881",
      contactType: "customer service",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BisaDev",
    image: "https://bisadev.id/images/app/og-image.png",
    url: "https://bisadev.id",
    telephone: "+6285178137881",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bekasi",
      addressCountry: "ID",
    },
    areaServed: "Indonesia",
  };

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <meta name="apple-mobile-web-app-title" content="Bisadev" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZHELFL429"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RZHELFL429');`
          }
        </Script>

        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          <ReactQueryProvider>
            <NextTopLoader showSpinner={false} color="var(--color-primary)" height={2} />
            {process.env.NEXT_PUBLIC_ENV === ENV.CONSTRUCTION ? <Construction /> : <>
              <AuthBootstrap />
              {children}
              <Toaster />
            </>}
          </ReactQueryProvider>
        </PreferencesStoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
