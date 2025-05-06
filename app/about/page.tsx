import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">About LUXE</h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A modern fashion and lifestyle blog dedicated to bringing you the
          latest trends, beauty tips, and travel inspiration.
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="LUXE Team"
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2>Our Story</h2>
        <p>
          LUXE was founded in 2020 with a simple mission: to create a space
          where fashion, beauty, and lifestyle content could coexist in a
          thoughtful, accessible way. What began as a small passion project has
          grown into a community of readers and contributors who share a love
          for aesthetics, self-expression, and mindful living.
        </p>

        <p>
          We believe that style is personal and that everyone deserves access to
          inspiration, information, and ideas that help them express themselves
          authentically. Our content is created with intention, focusing on
          quality over quantity and substance over fleeting trends.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Authenticity:</strong> We share genuine experiences and
            honest opinions.
          </li>
          <li>
            <strong>Inclusivity:</strong> We celebrate diversity in all forms
            and strive to create content that resonates with people from all
            backgrounds.
          </li>
          <li>
            <strong>Sustainability:</strong> We promote conscious consumption
            and highlight brands and practices that prioritize environmental
            responsibility.
          </li>
          <li>
            <strong>Creativity:</strong> We approach fashion and lifestyle as
            forms of creative expression and encourage our readers to do the
            same.
          </li>
        </ul>

        <h2>Meet the Team</h2>
        <p>
          LUXE is brought to you by a small team of writers, photographers, and
          creatives who are passionate about sharing their expertise and
          perspectives. Each team member brings a unique background and set of
          interests to the table, resulting in a diverse range of content that
          reflects the multifaceted nature of modern life.
        </p>

        <h3>Emma Johnson - Founder & Editor-in-Chief</h3>
        <p>
          With a background in fashion journalism and a degree in Media Studies,
          Emma founded LUXE to create the kind of publication she always wanted
          to read. She oversees the editorial direction of the site and
          contributes articles on sustainable fashion and industry trends.
        </p>

        <h3>Alex Chen - Beauty Editor</h3>
        <p>
          A licensed esthetician and beauty enthusiast, Alex brings expert
          knowledge and a critical eye to all things skincare and makeup.
          They're particularly interested in clean beauty and accessible
          self-care routines.
        </p>

        <h3>Maya Patel - Travel & Lifestyle Writer</h3>
        <p>
          An avid traveler who has visited over 30 countries, Maya shares
          destination guides, packing tips, and cultural insights. She also
          covers topics related to mindfulness, productivity, and creating
          meaningful spaces.
        </p>

        <h2>Join Our Community</h2>
        <p>
          LUXE is more than just a blog—it's a community of like-minded
          individuals who appreciate the art of living well. We invite you to
          join the conversation by subscribing to our newsletter, following us
          on social media, and sharing your thoughts in the comments section.
        </p>

        <p>
          Thank you for being part of our journey. We're excited to continue
          growing and evolving with you.
        </p>
      </div>
    </div>
  );
}
