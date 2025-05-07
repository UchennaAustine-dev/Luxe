import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CookiesPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Cookies Policy
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Last updated: May 7, 2023
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small pieces of text sent to your web browser by a website
          you visit. A cookie file is stored in your web browser and allows the
          website or a third-party to recognize you and make your next visit
          easier and the website more useful to you.
        </p>
        <p>
          Cookies can be "persistent" or "session" cookies. Persistent cookies
          remain on your personal computer or mobile device when you go offline,
          while session cookies are deleted as soon as you close your web
          browser.
        </p>

        <h2>How We Use Cookies</h2>
        <p>
          When you use and access our website, we may place a number of cookie
          files in your web browser. We use cookies for the following purposes:
        </p>
        <ul>
          <li>To enable certain functions of the website</li>
          <li>To provide analytics</li>
          <li>To store your preferences</li>
          <li>
            To enable advertisements delivery, including behavioral advertising
          </li>
        </ul>
        <p>
          We use both session and persistent cookies on our website and we use
          different types of cookies to run the website:
        </p>
        <ul>
          <li>
            <strong>Essential cookies.</strong> We may use essential cookies to
            authenticate users and prevent fraudulent use of user accounts.
          </li>
          <li>
            <strong>Preferences cookies.</strong> We may use preferences cookies
            to remember information that changes the way the website behaves or
            looks, such as the "remember me" functionality or your preferred
            language.
          </li>
          <li>
            <strong>Analytics cookies.</strong> We may use analytics cookies to
            track information about how the website is used so that we can make
            improvements. We may also use analytics cookies to test new
            advertisements, pages, features or new functionality of the website
            to see how our users react to them.
          </li>
          <li>
            <strong>Targeting cookies.</strong> These types of cookies are used
            to deliver advertisements that are more relevant to you and your
            interests. They are also used to limit the number of times you see
            an advertisement as well as help measure the effectiveness of the
            advertising campaign. They are usually placed by advertising
            networks with the website operator's permission. They remember that
            you have visited a website and this information is shared with other
            organizations such as advertisers.
          </li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party
          cookies to report usage statistics of the website, deliver
          advertisements on and through the website, and so on.
        </p>

        <h3>The third-party services we use include:</h3>
        <ul>
          <li>
            <strong>Google Analytics:</strong> To analyze how our website is
            used
          </li>
          <li>
            <strong>Social Media Platforms:</strong> To enable social sharing
            functionality
          </li>
          <li>
            <strong>Advertising Partners:</strong> To deliver relevant
            advertisements
          </li>
        </ul>

        <h2>What Are Your Choices Regarding Cookies</h2>
        <p>
          If you'd like to delete cookies or instruct your web browser to delete
          or refuse cookies, please visit the help pages of your web browser.
        </p>
        <p>
          Please note, however, that if you delete cookies or refuse to accept
          them, you might not be able to use all of the features we offer, you
          may not be able to store your preferences, and some of our pages might
          not display properly.
        </p>

        <h3>For the Chrome web browser</h3>
        <p>
          Visit{" "}
          <a
            href="https://support.google.com/accounts/answer/32050"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            this page from Google
          </a>
          .
        </p>

        <h3>For the Internet Explorer web browser</h3>
        <p>
          Visit{" "}
          <a
            href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            this page from Microsoft
          </a>
          .
        </p>

        <h3>For the Firefox web browser</h3>
        <p>
          Visit{" "}
          <a
            href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            this page from Mozilla
          </a>
          .
        </p>

        <h3>For the Safari web browser</h3>
        <p>
          Visit{" "}
          <a
            href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            this page from Apple
          </a>
          .
        </p>

        <p>
          For any other web browser, please visit your web browser's official
          web pages.
        </p>

        <h2>More Information About Cookies</h2>
        <p>You can learn more about cookies on these third-party websites:</p>
        <ul>
          <li>
            <a
              href="https://www.allaboutcookies.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              AllAboutCookies
            </a>
          </li>
          <li>
            <a
              href="https://www.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              Network Advertising Initiative
            </a>
          </li>
        </ul>

        <h2>Changes to This Cookies Policy</h2>
        <p>
          We may update our Cookies Policy from time to time. We will notify you
          of any changes by posting the new Cookies Policy on this page and
          updating the "Last updated" date at the top of this Cookies Policy.
        </p>
        <p>
          You are advised to review this Cookies Policy periodically for any
          changes. Changes to this Cookies Policy are effective when they are
          posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookies Policy, please contact us:
        </p>
        <ul>
          <li>By email: hello@luxeblog.com</li>
          <li>
            By visiting the contact page on our website:{" "}
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
