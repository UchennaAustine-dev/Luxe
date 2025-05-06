import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-lg">LUXE</h3>
            <p className="text-sm text-muted-foreground">
              A modern fashion and lifestyle blog dedicated to bringing you the
              latest trends, beauty tips, and travel inspiration.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/fashion"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/category/beauty"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  href="/category/travel"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/category/lifestyle"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4 uppercase tracking-wider">
              Subscribe
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest updates and offers by subscribing to our
              newsletter.
            </p>
            <Link
              href="#newsletter"
              className="text-sm font-medium underline underline-offset-4 hover:text-primary transition-colors"
            >
              Subscribe Now
            </Link>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
