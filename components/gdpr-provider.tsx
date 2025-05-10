"use client";

import type React from "react";

import { createContext, useContext, useEffect } from "react";

// Define the type for the Netpub GDPR API
interface CmpGdpr {
  acceptAll: () => void;
  rejectAll: () => void;
  showConsentModal: () => void;
  getConsent: () => any;
}

// Extend the Window interface to include the GDPR API
declare global {
  interface Window {
    cmpGdpr?: CmpGdpr;
  }
}

// Create a context for the GDPR functionality
const GdprContext = createContext<{
  showConsentModal: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
}>({
  showConsentModal: () => {},
  acceptAll: () => {},
  rejectAll: () => {},
});

export function GdprProvider({ children }: { children: React.ReactNode }) {
  // Function to show the GDPR consent modal
  const showConsentModal = () => {
    if (typeof window !== "undefined" && window.cmpGdpr) {
      window.cmpGdpr.showConsentModal();
    }
  };

  // Function to accept all cookies
  const acceptAll = () => {
    if (typeof window !== "undefined" && window.cmpGdpr) {
      window.cmpGdpr.acceptAll();
    }
  };

  // Function to reject all cookies
  const rejectAll = () => {
    if (typeof window !== "undefined" && window.cmpGdpr) {
      window.cmpGdpr.rejectAll();
    }
  };

  // Initialize the GDPR functionality when the component mounts
  useEffect(() => {
    // The Netpub script will load asynchronously, so we don't need to do anything here
    // The script will initialize itself
  }, []);

  return (
    <GdprContext.Provider value={{ showConsentModal, acceptAll, rejectAll }}>
      {children}
    </GdprContext.Provider>
  );
}

// Hook to use the GDPR functionality
export function useGdpr() {
  return useContext(GdprContext);
}
