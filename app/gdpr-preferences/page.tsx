"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGdpr } from "@/components/gdpr-provider";
import Link from "next/link";

export default function GdprPreferencesPage() {
  const { showConsentModal, acceptAll, rejectAll } = useGdpr();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Privacy Preferences
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Manage your privacy and cookie preferences
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p>
          We use cookies and similar technologies to help personalize content,
          tailor and measure ads, and provide a better experience. By clicking
          "Accept All", you consent to our use of cookies and similar
          technologies.
        </p>

        <p>
          You can manage your preferences at any time by clicking "Manage
          Preferences" below. For more information about how we use cookies and
          your data, please see our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookies" className="text-primary hover:underline">
            Cookie Policy
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button onClick={showConsentModal} size="lg">
            Manage Preferences
          </Button>
          <Button onClick={acceptAll} variant="default" size="lg">
            Accept All
          </Button>
          <Button onClick={rejectAll} variant="outline" size="lg">
            Reject All
          </Button>
        </div>

        <h2 className="mt-12">Your Data Rights</h2>
        <p>
          Under the General Data Protection Regulation (GDPR) and other data
          protection laws, you have rights related to your personal data:
        </p>

        <ul>
          <li>The right to access your personal data</li>
          <li>The right to rectification of your personal data</li>
          <li>The right to erasure of your personal data</li>
          <li>The right to restrict processing of your personal data</li>
          <li>The right to data portability</li>
          <li>The right to object to processing of your personal data</li>
          <li>Rights related to automated decision making and profiling</li>
        </ul>

        <p>
          To exercise any of these rights, please contact us using the
          information provided in our{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
