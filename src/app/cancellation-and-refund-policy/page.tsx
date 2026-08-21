import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/legal-page-template";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Cancellation and Refund Policy" };

export default function CancellationRefundPage() {
  return (
    <LegalPageTemplate
      title="Cancellation and Refund Policy"
      updated="August 2026"
      intro="This policy explains how cancellations and refunds are handled for contributions made through this website."
      sections={[
        {
          heading: "Donations Are Final",
          body: [
            "Because contributions are put to immediate use for classroom infrastructure, student sponsorships, and teacher salaries, donations made through this site are generally non-refundable once processed.",
          ],
        },
        {
          heading: "Payment Errors",
          body: [
            "If you believe a payment was made in error — for example, a duplicate transaction or an incorrect amount — please contact us within 7 days of the transaction with your payment reference number, and we will review the matter with our payment partner, Razorpay.",
          ],
        },
        {
          heading: "How to Request a Review",
          body: [`Write to ${site.email} or call ${site.phone} with your transaction details, and we will respond within a reasonable time.`],
        },
      ]}
    />
  );
}
