import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      updated="August 2026"
      intro={`This Privacy Policy explains how ${site.name} ("we", "us", "the school") collects, uses, and protects information when you visit this website, contact us, or make a donation.`}
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you contact us by phone or email, or express interest in volunteering or contributing, we may collect your name, email address, phone number, and any details you choose to share with us.",
            "When you make a donation through our third-party payment partner (Razorpay) or complete an interest form (Google Forms), that platform collects and processes your information under its own privacy policy. We only receive confirmation that a contribution or expression of interest was made, plus the contact details you choose to share with us directly.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "We use the information you share to respond to enquiries, coordinate volunteering and sponsorship programs, send donation acknowledgements, and keep you informed about the school's work if you have asked to hear from us.",
            "We do not sell or rent your personal information to any third party.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "Donations are processed by Razorpay, and some interest forms are hosted on Google Forms. Your use of those services is governed by their respective privacy policies, not this one.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We take reasonable administrative and technical measures to protect the information you share with us. No online system is completely secure, and we encourage you to avoid sharing sensitive financial details with us directly outside of our verified payment partner.",
          ],
        },
        {
          heading: "Contact Us",
          body: [`For any questions about this policy, write to us at ${site.email} or call ${site.phone}.`],
        },
      ]}
    />
  );
}
