import { notFound } from "next/navigation";
import { allPosts } from "@/lib/data";
import { BlogGrid } from "@/components/blog-grid";
import { Separator } from "@/components/ui/separator";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const getCategoryTitle = (slug: string) => {
  const categories: Record<string, string> = {
    fashion: "Fashion",
    beauty: "Beauty",
    travel: "Travel",
    lifestyle: "Lifestyle",
  };

  return categories[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
};

const getCategoryDescription = (slug: string) => {
  const descriptions: Record<string, string> = {
    fashion:
      "Discover the latest trends, runway highlights, and style guides from the world of fashion.",
    beauty:
      "Explore skincare routines, makeup tutorials, and product reviews for your beauty regimen.",
    travel:
      "Journey to exotic destinations with our travel guides, tips, and packing essentials.",
    lifestyle:
      "Find wellness tips, home decor inspiration, and mindful living practices for a balanced life.",
  };

  return (
    descriptions[slug] || "Explore our collection of articles and insights."
  );
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const categoryTitle = getCategoryTitle(slug);
  const categoryDescription = getCategoryDescription(slug);

  const categoryPosts = allPosts.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  );

  if (categoryPosts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          {categoryTitle}
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg">{categoryDescription}</p>
      </div>

      <BlogGrid posts={categoryPosts} />
    </div>
  );
}

export async function generateStaticParams() {
  const categories = [
    ...new Set(allPosts.map((post) => post.category.toLowerCase())),
  ];

  return categories.map((category) => ({
    slug: category,
  }));
}
