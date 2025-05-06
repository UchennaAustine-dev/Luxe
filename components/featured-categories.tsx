"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Fashion",
    description:
      "Explore the latest trends, runway highlights, and style guides",
    image:
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/category/fashion",
  },
  {
    name: "Beauty",
    description:
      "Discover skincare routines, makeup tutorials, and product reviews",
    image:
      "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/category/beauty",
  },
  {
    name: "Travel",
    description:
      "Journey to exotic destinations, travel guides, and packing essentials",

    image:
      "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/category/travel",
  },
  {
    name: "Lifestyle",
    description: "Wellness tips, home decor inspiration, and mindful living",
    image:
      "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    href: "/category/lifestyle",
  },
];

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {categories.map((category) => (
        <HoverCard key={category.name} openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Link
              href={category.href}
              className="group relative overflow-hidden rounded-lg aspect-square flex items-center justify-center"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <h3 className="relative z-10 font-heading text-xl md:text-2xl text-white">
                {category.name}
              </h3>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex flex-col gap-2">
              <h4 className="font-heading text-lg">{category.name}</h4>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
