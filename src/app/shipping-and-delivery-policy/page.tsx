import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Shipping and Delivery Policy" };

export default function ShippingDeliveryPage() {
  return (
    <LegalPageTemplate
      title="Shipping and Delivery Policy"
      updated="August 2026"
      intro={`${site.name} does not sell or ship physical goods through this website.`}
      sections={[
        {
          heading: "No Physical Products",
          body: [
            "This website exists to share information about the school and to accept donations toward its programs. There are no physical products to ship or deliver.",
          ],
        },
        {
          heading: "Digital Confirmation",
          body: [
            "When you make a contribution through our payment partner, Razorpay, you will receive a digital payment confirmation from Razorpay. The school will separately acknowledge your contribution by email where contact details are available.",
          ],
        },
        {
          heading: "Contact",
          body: [`For any questions, reach us at ${site.email} or ${site.phone}.`],
        },
      ]}
    />
  );
}
