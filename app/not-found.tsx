import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <h1 className="font-heading text-6xl md:text-8xl mb-6">404</h1>
      <h2 className="font-heading text-2xl md:text-3xl mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
