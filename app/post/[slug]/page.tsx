import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { BlogGrid } from "@/components/blog-grid";
import { CommentSection } from "@/components/comment-section";
import { ShareButtons } from "@/components/share-buttons";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <Link
        href="/"
        className="inline-flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {post.category}
          </span>
          <span className="inline-flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center">
            <User className="mr-1 h-3 w-3" />
            {post.author}
          </span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground">{post.excerpt}</p>
      </div>

      <div className="relative w-full aspect-[16/9] mb-10 rounded-lg overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        {post.content ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <>
            <p>
              Fashion is more than just clothing; it's a form of
              self-expression, a reflection of culture, and a constantly
              evolving art form. In recent years, the fashion industry has
              undergone significant transformations, with sustainability
              becoming a central focus for many brands and consumers alike.
            </p>
            <p>
              The concept of sustainable fashion encompasses various aspects,
              from the materials used to create garments to the working
              conditions of those who make them. Many established fashion houses
              are now reimagining their production processes to reduce
              environmental impact, while emerging designers are building their
              brands with sustainability as a core value from the start.
            </p>
            <h2>The Impact of Fast Fashion</h2>
            <p>
              Fast fashion has dominated the industry for decades, offering
              consumers affordable access to trending styles. However, this
              business model has come at a significant cost to the environment
              and workers in the supply chain. The rapid production cycles and
              emphasis on low costs have led to:
            </p>
            <ul>
              <li>Excessive water usage and pollution</li>
              <li>Textile waste accumulating in landfills</li>
              <li>Poor working conditions in manufacturing facilities</li>
              <li>Increased carbon emissions contributing to climate change</li>
            </ul>
            <p>
              As awareness of these issues grows, consumers are increasingly
              seeking alternatives that align with their values. This shift in
              consumer behavior has prompted brands to reconsider their
              approaches and innovate in ways that reduce their environmental
              footprint.
            </p>
            <h2>Innovative Solutions in Sustainable Fashion</h2>
            <p>
              Across the industry, designers and brands are exploring creative
              solutions to make fashion more sustainable:
            </p>
            <ol>
              <li>
                <strong>Recycled Materials:</strong> Transforming plastic
                bottles, fishing nets, and textile waste into new fabrics
              </li>
              <li>
                <strong>Circular Design:</strong> Creating garments that can be
                easily disassembled and recycled at the end of their life
              </li>
              <li>
                <strong>Rental and Resale:</strong> Extending the lifespan of
                clothing through sharing and secondhand markets
              </li>
              <li>
                <strong>Transparent Supply Chains:</strong> Providing consumers
                with information about how and where their clothes are made
              </li>
            </ol>
            <p>
              These innovations are not only reducing the environmental impact
              of fashion but also creating new business opportunities and
              changing how consumers relate to their clothing.
            </p>
            <blockquote>
              <p>
                "Fashion can be a powerful tool for change when we recognize its
                potential to influence culture and behavior. By making conscious
                choices about what we wear and how we produce clothing, we can
                contribute to a more sustainable and equitable future."
              </p>
            </blockquote>
            <h2>Looking Forward</h2>
            <p>
              The journey toward a more sustainable fashion industry is ongoing,
              with challenges and opportunities at every turn. As technology
              advances and consumer awareness grows, we can expect to see
              continued innovation in materials, production methods, and
              business models.
            </p>
            <p>
              By supporting brands that prioritize sustainability and making
              mindful choices about our own consumption, we can all play a part
              in shaping the future of fashion. After all, true style isn't just
              about looking good—it's about feeling good about the impact our
              choices have on the world around us.
            </p>
          </>
        )}
      </div>

      <Separator className="my-10" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={post.author || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{post.author || "Emma Johnson"}</p>
            <p className="text-sm text-muted-foreground">Fashion Editor</p>
          </div>
        </div>
        <ShareButtons title={post.title} />
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-2xl md:text-3xl mb-8">
            You Might Also Like
          </h2>
          <BlogGrid posts={relatedPosts} />
        </div>
      )}

      <CommentSection postId={post.id} />
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
