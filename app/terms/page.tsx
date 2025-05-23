import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Terms of Service
        </h1>
        <Separator className="mx-auto w-20 my-6" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Last updated: May 7, 2023
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h2>Introduction</h2>
        <p>
          Welcome to LUXE. These terms and conditions outline the rules and
          regulations for the use of our website.
        </p>

        <p>
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use LUXE&apos;s website if you
          do not accept all of the terms and conditions stated on this page.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these terms, LUXE and/or its
          licensors own all the intellectual property rights and materials
          contained in this website.
        </p>

        <p>
          You are granted a limited license only for purposes of viewing the
          material contained on this website.
        </p>

        <h2>Restrictions</h2>
        <p>You are specifically restricted from all of the following:</p>
        <ul>
          <li>Publishing any website material in any other media</li>
          <li>
            Selling, sublicensing, and/or otherwise commercializing any website
            material
          </li>
          <li>Publicly performing and/or showing any website material</li>
          <li>
            Using this website in any way that is or may be damaging to this
            website
          </li>
          <li>
            Using this website in any way that impacts user access to this
            website
          </li>
          <li>
            Using this website contrary to applicable laws and regulations, or
            in any way may cause harm to the website, or to any person or
            business entity
          </li>
          <li>
            Engaging in any data mining, data harvesting, data extracting, or
            any other similar activity in relation to this website
          </li>
          <li>Using this website to engage in any advertising or marketing</li>
        </ul>

        <p>
          Certain areas of this website are restricted from being accessed by
          you, and LUXE may further restrict access by you to any areas of this
          website, at any time, in absolute discretion. Any user ID and password
          you may have for this website are confidential and you must maintain
          confidentiality as well.
        </p>

        <h2>Your Content</h2>
        <p>
          In these terms and conditions, &quot;Your Content&quot; shall mean any
          audio, video, text, images, or other material you choose to display on
          this website. By displaying Your Content, you grant LUXE a
          non-exclusive, worldwide irrevocable, sub-licensable license to use,
          reproduce, adapt, publish, translate, and distribute it in any and all
          media.
        </p>

        <p>
          Your Content must be your own and must not be invading any
          third-party&apos;s rights. LUXE reserves the right to remove any of
          Your Content from this website at any time without notice.
        </p>

        <h2>No Warranties</h2>
        <p>
          This website is provided &quot;as is,&quot; with all faults, and LUXE
          expresses no representations or warranties, of any kind related to
          this website or the materials contained on this website. Also, nothing
          contained on this website shall be interpreted as advising you.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall LUXE, nor any of its officers, directors, and
          employees, be held liable for anything arising out of or in any way
          connected with your use of this website whether such liability is
          under contract. LUXE, including its officers, directors, and
          employees, shall not be held liable for any indirect, consequential,
          or special liability arising out of or in any way related to your use
          of this website.
        </p>

        <h2>Indemnification</h2>
        <p>
          You hereby indemnify to the fullest extent LUXE from and against any
          and/or all liabilities, costs, demands, causes of action, damages, and
          expenses arising in any way related to your breach of any of the
          provisions of these terms.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of these terms is found to be invalid under any
          applicable law, such provisions shall be deleted without affecting the
          remaining provisions herein.
        </p>

        <h2>Variation of Terms</h2>
        <p>
          LUXE is permitted to revise these terms at any time as it sees fit,
          and by using this website, you are expected to review these terms on a
          regular basis.
        </p>

        <h2>Assignment</h2>
        <p>
          LUXE is allowed to assign, transfer, and subcontract its rights and/or
          obligations under these terms without any notification. However, you
          are not allowed to assign, transfer, or subcontract any of your rights
          and/or obligations under these terms.
        </p>

        <h2>Entire Agreement</h2>
        <p>
          These terms constitute the entire agreement between LUXE and you in
          relation to your use of this website and supersede all prior
          agreements and understandings.
        </p>

        <h2>Governing Law & Jurisdiction</h2>
        <p>
          These terms will be governed by and interpreted in accordance with the
          laws of the country where LUXE is based, and you submit to the
          non-exclusive jurisdiction of the state and federal courts located
          there for the resolution of any disputes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us:
        </p>
        <ul>
          <li>By email: legal@luxeblog.com</li>
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
