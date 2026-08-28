import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms and Conditions"
      updated="August 2026"
      intro={`These Terms and Conditions govern your use of this website and your interactions with ${site.name}, run under the Haji Imam Ali Educational Trust, Brambe.`}
      sections={[
        {
          heading: "Use of This Website",
          body: [
            "This website is provided to share information about the school, its initiatives, accolades, and ways to support its work. Content, photographs, and descriptions belong to the school and may not be reproduced for commercial purposes without permission.",
          ],
        },
        {
          heading: "Donations and Contributions",
          body: [
            "Contributions made through this site are processed by our payment partner, Razorpay, and are received on behalf of the Haji Imam Ali Educational Trust, which runs and manages H. H. High School, Brambe.",
            "Donations are used to directly support the school's initiatives — infrastructure, classroom improvements, student sponsorships, and teacher salaries — as described on the relevant support page at the time of your contribution.",
          ],
        },
        {
          heading: "External Links",
          body: [
            "This site links to third-party services including Razorpay (payments), Google Forms (expressions of interest), and social media platforms. We are not responsible for the content or practices of those external services.",
          ],
        },
        {
          heading: "Changes",
          body: ["We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms."],
        },
        {
          heading: "Contact",
          body: [`Questions about these terms can be sent to ${site.email}.`],
        },
      ]}
    />
  );
}
