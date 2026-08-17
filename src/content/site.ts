export const site = {
  name: "Hamid Hassan High School",
  shortName: "H. H. High School",
  tagline: "Outperforming Ourselves - Each Day",
  address: {
    line1: "HIAET, C.T.I. Road, Brambe",
    line2: "Ranchi-835 205, JHARKHAND, INDIA",
    mapQuery: "HIAET, Brambe, Ranchi, JHARKHAND, INDIA",
  },
  phone: "+91 94301 95001",
  phoneHref: "tel:+919430195001",
  email: "admin@hhhighschool.org",
  emailHref: "mailto:admin@hhhighschool.org",
} as const;

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/hhhighschool/" },
  { name: "Instagram", href: "https://www.instagram.com/hhhs_brambe/" },
  { name: "Youtube", href: "https://www.youtube.com/hhhighschool" },
  { name: "X (Twitter)", href: "https://x.com/HHHS_Brambe" },
] as const;

export const storyClusterNav = [
  { label: "Our Story", href: "/our-story", color: "var(--brand-story)" },
  { label: "Initiatives", href: "/initiatives", color: "var(--brand-initiatives)" },
  { label: "Accolades", href: "/accolades", color: "var(--brand-accolades)" },
  { label: "Gallery", href: "/gallery", color: "var(--brand-gallery)" },
] as const;

export const footerQuickLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Accolades", href: "/accolades" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/#contact-us" },
] as const;

export const footerLegalLinks = [
  { label: "Contribute", href: "/support-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation and Refund Policy", href: "/cancellation-and-refund-policy" },
  { label: "Shipping and Delivery Policy", href: "/shipping-and-delivery-policy" },
] as const;
