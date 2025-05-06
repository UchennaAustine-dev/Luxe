"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Post } from "@/lib/data";

interface HeroCarouselProps {
  posts: Post[];
}

export function HeroCarousel({ posts }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % posts.length);
  const prev = () => setCurrent((current - 1 + posts.length) % posts.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="relative w-full h-full">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container">
              <div className="max-w-2xl space-y-4">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {post.category}
                </div>
                <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white">
                  {post.title}
                </h2>
                <p className="text-white/80 max-w-xl line-clamp-2 md:line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href={`/post/${post.slug}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/20 hover:bg-background/40 text-white"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/20 hover:bg-background/40 text-white"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === current ? "bg-white w-6" : "bg-white/50"
            )}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
