import { site } from "@/content/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    alternateName: site.shortName,
    url: "https://hhhighschool.org",
    logo: "https://hhhighschool.org/logo.png",
    description:
      "A rural school in Brambe, Jharkhand built on child-centered, values-based, affordable education.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: "Ranchi",
      addressRegion: "Jharkhand",
      postalCode: "835205",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Administrative",
      telephone: site.phone,
      email: site.email,
    },
    sameAs: [
      "https://www.facebook.com/hhhighschool/",
      "https://www.instagram.com/hhhs_brambe/",
      "https://www.youtube.com/hhhighschool",
      "https://x.com/HHHS_Brambe",
    ],
  };
}

export function articleSchema(
  title: string,
  description: string,
  datePublished: Date = new Date()
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: datePublished.toISOString(),
    dateModified: datePublished.toISOString(),
    author: {
      "@type": "Organization",
      name: site.shortName,
      url: "https://hhhighschool.org",
    },
    publisher: {
      "@type": "Organization",
      name: site.shortName,
      logo: {
        "@type": "ImageObject",
        url: "https://hhhighschool.org/logo.png",
      },
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
