import Construction from "@/components/Construction";
import { GlobalTopLoader } from "@/components/GlobalTopLoader";
import { JsonLd } from "@/components/seo/JsonLd";
import { AuthBootstrap } from "@/context/providers/AuthBootstrap";
import { ReactQueryProvider } from "@/context/providers/react-query.provider";
import { PreferencesStoreProvider } from "@/context/stores/preferences-provider";
import { ENV } from "@/features/auth/types/env.type";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import '../styles/_keyframe-animations.scss';
import "./globals.css";
import { organizationSchema } from "./organization-schema";

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

  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Bisadev" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationSchema} />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2SL8HEZB5W"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {
            `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2SL8HEZB5W');`
          }
        </Script>

        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          <ReactQueryProvider>
            {process.env.NEXT_PUBLIC_ENV === ENV.CONSTRUCTION ? <Construction /> : <>
              <AuthBootstrap />
              <GlobalTopLoader />
              {children}
              <Toaster />
            </>}
          </ReactQueryProvider>
        </PreferencesStoreProvider>
      </body>
    </html>
  );
}
