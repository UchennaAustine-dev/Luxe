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

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>
          Welcome to LUXE ("we," "our," or "us"). We respect your privacy and
          are committed to protecting your personal data. This privacy policy
          will inform you about how we look after your personal data when you
          visit our website and tell you about your privacy rights and how the
          law protects you.
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
          <li>Usage data</li>
          <li>Cookies and usage data</li>
        </ul>

        <h3>Usage Data</h3>
        <p>
          We may also collect information on how the website is accessed and
          used. This usage data may include information such as your computer's
          Internet Protocol address (e.g., IP address), browser type, browser
          version, the pages of our website that you visit, the time and date of
          your visit, the time spent on those pages, unique device identifiers,
          and other diagnostic data.
        </p>

        <h3>Tracking & Cookies Data</h3>
        <p>
          We use cookies and similar tracking technologies to track the activity
          on our website and hold certain information. Cookies are files with a
          small amount of data which may include an anonymous unique identifier.
        </p>
        <p>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our website.
        </p>
        <p>
          For more information about the cookies we use, please see our{" "}
          <Link href="/cookies" className="text-primary hover:text-primary/80">
            Cookie Policy
          </Link>
          .
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
            about other goods, services and events which we offer that are
            similar to those that you have already purchased or enquired about
            unless you have opted not to receive such information
          </li>
        </ul>

        <h2>Legal Basis for Processing Personal Data</h2>
        <p>
          We will only collect and process your personal data when we have a
          legal basis to do so. Legal bases include consent (where you have
          given consent), contract (where processing is necessary for the
          performance of a contract with you), and "legitimate interests".
        </p>
        <p>When we rely on legitimate interests, these interests are:</p>
        <ul>
          <li>Responding to your queries</li>
          <li>Providing, improving, and developing our services</li>
          <li>Marketing our services</li>
          <li>Protecting our users, personnel, and property</li>
          <li>Managing legal issues</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We will only retain your personal data for as long as necessary to
          fulfill the purposes we collected it for, including for the purposes
          of satisfying any legal, accounting, or reporting requirements.
        </p>
        <p>
          To determine the appropriate retention period for personal data, we
          consider the amount, nature, and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal requirements.
        </p>

        <h2>Your Data Protection Rights</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>The right to access</strong> – You have the right to request
            copies of your personal data.
          </li>
          <li>
            <strong>The right to rectification</strong> – You have the right to
            request that we correct any information you believe is inaccurate.
            You also have the right to request that we complete information you
            believe is incomplete.
          </li>
          <li>
            <strong>The right to erasure</strong> – You have the right to
            request that we erase your personal data, under certain conditions.
          </li>
          <li>
            <strong>The right to restrict processing</strong> – You have the
            right to request that we restrict the processing of your personal
            data, under certain conditions.
          </li>
          <li>
            <strong>The right to object to processing</strong> – You have the
            right to object to our processing of your personal data, under
            certain conditions.
          </li>
          <li>
            <strong>The right to data portability</strong> – You have the right
            to request that we transfer the data that we have collected to
            another organization, or directly to you, under certain conditions.
          </li>
        </ul>
        <p>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us at our
          email: hello@luxeblog.com
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our website is not intended for children under 16 years of age. We do
          not knowingly collect personal information from children under 16. If
          you are a parent or guardian and you are aware that your child has
          provided us with personal information, please contact us so that we
          can take necessary actions.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date at the top of this Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
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
