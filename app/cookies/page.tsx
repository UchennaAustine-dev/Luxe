import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Cookie Policy
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Last updated: May 7, 2023
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          website or a third-party to recognize you and make your next visit
          easier and the website more useful to you.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          LUXE uses cookies for a variety of reasons detailed below.
          Unfortunately, in most cases, there are no industry standard options
          for disabling cookies without completely disabling the functionality
          and features they add to this site. It is recommended that you leave
          on all cookies if you are not sure whether you need them or not in
          case they are used to provide a service that you use.
        </p>

        <h2>The Cookies We Set</h2>

        <h3>Account related cookies</h3>
        <p>
          If you create an account with us, we will use cookies for the
          management of the signup process and general administration. These
          cookies will usually be deleted when you log out; however, in some
          cases, they may remain afterward to remember your site preferences
          when logged out.
        </p>

        <h3>Login related cookies</h3>
        <p>
          We use cookies when you are logged in so that we can remember this
          fact. This prevents you from having to log in every single time you
          visit a new page. These cookies are typically removed or cleared when
          you log out to ensure that you can only access restricted features and
          areas when logged in.
        </p>

        <h3>Email newsletters related cookies</h3>
        <p>
          This site offers newsletter or email subscription services, and
          cookies may be used to remember if you are already registered and
          whether to show certain notifications which might only be valid to
          subscribed/unsubscribed users.
        </p>

        <h3>Forms related cookies</h3>
        <p>
          When you submit data through a form such as those found on contact
          pages or comment forms, cookies may be set to remember your user
          details for future correspondence.
        </p>

        <h3>Site preferences cookies</h3>
        <p>
          In order to provide you with a great experience on this site, we
          provide the functionality to set your preferences for how this site
          runs when you use it. In order to remember your preferences, we need
          to set cookies so that this information can be called whenever you
          interact with a page that is affected by your preferences.
        </p>

        <h2>Third Party Cookies</h2>
        <p>
          In some special cases, we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul>
          <li>
            This site uses Google Analytics, which is one of the most widespread
            and trusted analytics solutions on the web, to help us understand
            how you use the site and ways that we can improve your experience.
            These cookies may track things such as how long you spend on the
            site and the pages that you visit so we can continue to produce
            engaging content.
          </li>
          <li>
            From time to time, we test new features and make subtle changes to
            the way that the site is delivered. When we are still testing new
            features, these cookies may be used to ensure that you receive a
            consistent experience whilst on the site whilst ensuring we
            understand which optimizations our users appreciate the most.
          </li>
          <li>
            We also use social media buttons and/or plugins on this site that
            allow you to connect with your social network in various ways. For
            these to work, social media sites including Facebook, Twitter,
            Instagram, and Pinterest, will set cookies through our site which
            may be used to enhance your profile on their site or contribute to
            the data they hold for various purposes outlined in their respective
            privacy policies.
          </li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can set your browser not to accept cookies, and the website{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.allaboutcookies.org
          </a>{" "}
          tells you how to remove cookies from your browser. However, in a few
          cases, some of our website features may not function as a result.
        </p>

        <h2>More Information</h2>
        <p>
          Hopefully, that has clarified things for you. As was previously
          mentioned, if there is something that you aren&apos;t sure whether you
          need or not, it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </p>

        <p>
          However, if you are still looking for more information, you can
          contact us:
        </p>
        <ul>
          <li>By email: privacy@luxeblog.com</li>
          <li>
            By visiting the contact page on our website:{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
