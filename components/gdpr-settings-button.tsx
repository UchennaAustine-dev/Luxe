"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useGdpr } from "@/components/gdpr-provider";

export function GdprSettingsButton() {
  const { showConsentModal } = useGdpr();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1 text-xs"
      onClick={showConsentModal}
    >
      <Settings className="h-3 w-3" />
      <span>Cookie Settings</span>
    </Button>
  );
}
