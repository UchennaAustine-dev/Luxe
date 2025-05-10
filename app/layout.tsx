import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { fontSans, fontHeading } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SonnerProvider } from "@/components/sonner-provider";
import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import { CookieConsent } from "@/components/cookie-consent";
import Script from "next/script";
import { GdprProvider } from "@/components/gdpr-provider";

export const metadata = {
  title: "LUXE | Fashion & Lifestyle Blog",
  description: "A modern fashion and lifestyle blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        {/* Netpub GDPR Script */}
        <Script
          src="https://fstatic.netpub.media/extra/cmp/cmp-gdpr.js"
          strategy="afterInteractive"
        />

        <GdprProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <CookieConsent />
            </div>
            <SonnerProvider />
          </ThemeProvider>
        </GdprProvider>
      </body>
    </html>
  );
}
