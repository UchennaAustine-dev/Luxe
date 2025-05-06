import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Post } from "@/lib/data";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface BlogGridProps {
  posts: Post[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.slug}`} className="group">
          <Card className="overflow-hidden border-none shadow-sm transition-all duration-300 hover:shadow-md h-full">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2 mb-4">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 flex items-center text-sm text-muted-foreground mt-auto">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
