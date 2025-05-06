"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareUrl =
    url || typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied", {
      description: "The article link has been copied to your clipboard.",
      duration: 3000,
    });
  };

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={() =>
          openShareWindow(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`
          )
        }
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={() =>
          openShareWindow(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              title
            )}&url=${encodeURIComponent(shareUrl)}`
          )
        }
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={() =>
          openShareWindow(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              shareUrl
            )}`
          )
        }
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="rounded-full h-8 w-8"
        onClick={handleCopyLink}
      >
        <Link2 className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  );
}
