"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    toast.success("Subscription successful!", {
      description:
        "Thank you for subscribing! You'll receive our next newsletter soon.",
      duration: 3000,
    });
    setEmail("");
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="flex items-center justify-center mb-6">
        <Mail className="h-8 w-8 text-primary mr-2" />
        <h3 className="font-heading text-2xl md:text-3xl">
          Subscribe to Our Newsletter
        </h3>
      </div>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Stay updated with the latest fashion trends, beauty tips, and lifestyle
        inspiration delivered straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-full border-muted-foreground/20"
        />
        <Button type="submit" className="rounded-full" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}
