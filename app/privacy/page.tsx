import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Privacy Policy
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Last updated: May 7, 2023
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2>Introduction</h2>
        <p>
          At LUXE, we respect your privacy and are committed to protecting your
          personal data. This privacy policy will inform you about how we look
          after your personal data when you visit our website and tell you about
          your privacy rights and how the law protects you.
        </p>

        <p>
          This privacy policy applies to all information collected through our
          website, as well as any related services, sales, marketing, or events.
        </p>

        <h2>The Data We Collect</h2>
        <p>
          We collect several different types of information for various purposes
          to provide and improve our service to you:
        </p>

        <h3>Personal Data</h3>
        <p>
          While using our website, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. This may include:
        </p>
        <ul>
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Cookies and usage data</li>
        </ul>

        <h3>Usage Data</h3>
        <p>
          We may also collect information on how the website is accessed and
          used. This usage data may include information such as your
          computer&apos;s Internet Protocol address (e.g., IP address), browser
          type, browser version, the pages of our website that you visit, the
          time and date of your visit, the time spent on those pages, unique
          device identifiers, and other diagnostic data.
        </p>

        <h2>How We Use Your Data</h2>
        <p>LUXE uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our website</li>
          <li>To notify you about changes to our website</li>
          <li>
            To allow you to participate in interactive features of our website
            when you choose to do so
          </li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve
            our website
          </li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent and address technical issues</li>
          <li>
            To provide you with news, special offers and general information
            about other goods, services and events which we offer
          </li>
        </ul>

        <h2>Legal Basis for Processing Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests
          </li>
          <li>Where we need to comply with a legal obligation</li>
          <li>Where you have provided consent</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We have implemented appropriate security measures to prevent your
          personal data from being accidentally lost, used, or accessed in an
          unauthorized way, altered, or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors, and
          other third parties who have a business need to know.
        </p>

        <h2>Data Retention</h2>
        <p>
          We will only retain your personal data for as long as reasonably
          necessary to fulfill the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting, or
          reporting requirements.
        </p>

        <h2>Your Data Protection Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data, including:
        </p>
        <ul>
          <li>The right to access your personal data</li>
          <li>The right to request correction of your personal data</li>
          <li>The right to request erasure of your personal data</li>
          <li>The right to object to processing of your personal data</li>
          <li>
            The right to request restriction of processing your personal data
          </li>
          <li>The right to request transfer of your personal data</li>
          <li>The right to withdraw consent</li>
        </ul>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &quot;last updated&quot; date at the top of this Privacy
          Policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
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
