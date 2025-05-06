import { HeroCarousel } from "@/components/hero-carousel";
import { BlogGrid } from "@/components/blog-grid";
import { FeaturedCategories } from "@/components/featured-categories";
import { NewsletterForm } from "@/components/newsletter-form";
import { featuredPosts, allPosts } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroCarousel posts={featuredPosts} />

      <section className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">
            Explore Categories
          </h2>
          <div className="w-20 h-1 bg-primary/50 rounded-full" />
          <p className="text-muted-foreground max-w-[700px]">
            Discover the latest trends and insights across fashion, beauty, and
            lifestyle
          </p>
        </div>
        <FeaturedCategories />
      </section>

      <section className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl">Latest Articles</h2>
          <div className="w-20 h-1 bg-primary/50 rounded-full" />
        </div>
        <BlogGrid posts={allPosts} />
      </section>

      <section className="container mx-auto py-12 bg-muted/30 rounded-lg">
        <NewsletterForm />
      </section>
    </div>
  );
}
