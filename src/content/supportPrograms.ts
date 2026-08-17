export type SupportProgram = {
  slug: string;
  title: string;
  parenthetical: string;
  teaser: string;
  cardImage: string;
  ctaLabel: "Contribute" | "Express Interest";
  ctaHref: string;
  detail: {
    tagline: string;
    whyHeading: string;
    why: string[];
    planHeading: string;
    plan: string[];
    howHeading: string;
    how: string[];
    closing: string;
    images: string[];
  };
};

export const supportPrograms: SupportProgram[] = [
  {
    slug: "bricks-and-beyond",
    title: "Bricks and Beyond",
    parenthetical: "for infrastructure needs",
    teaser: "Help us build and revamp safe, strong, and inspiring classrooms for our children.",
    cardImage: "/images/support/card-bricks-and-beyond.jpg",
    ctaLabel: "Contribute",
    ctaHref: "https://rzp.io/rzp/HHHSInfrastructureCampaign",
    detail: {
      tagline: "Help us build, rebuild, and revamp safe, strong, and inspiring classrooms for our children.",
      whyHeading: "Why We Need Your Help?",
      why: [
        "The COVID-19 pandemic brought a heavy blow to our school. With classrooms shut for two long years:",
        "Benches wore out and became unsafe for daily use.",
        "Fungus crept into the walls, leaving classrooms damp and unhealthy.",
        "Termites destroyed wooden doors, windows, and frames.",
        "Many classrooms now stand exposed and in urgent need of care.",
      ],
      planHeading: "Our Revival Plan",
      plan: [
        "We are working to rebuild strong and lasting learning spaces by:",
        "Installing sturdy metal doors and windows that resist termites and weather.",
        "Renewing wiring and electrification to brighten up classrooms.",
        "Adding ceiling fans to make the learning environment comfortable.",
        "Building shaded porticos outside classrooms to create gathering and rest spaces for children.",
      ],
      howHeading: "How You Can Help",
      how: [
        "Your support can directly fund — fully or partially — any of the following:",
        "Metal doors and windows for a classroom.",
        "Electrical rewiring and lighting fixtures to brighten learning spaces.",
        "Ceiling fans and classroom ventilation for comfort and focus.",
        "Portico construction to provide shaded, open areas for rest and learning.",
      ],
      closing: "Every contribution, big or small, helps us rebuild safe and inspiring spaces for our children.",
      images: [
        "/images/support/bricks-photo-01.jpg",
        "/images/support/bricks-photo-02.jpg",
        "/images/support/bricks-photo-03.jpg",
        "/images/support/bricks-photo-04.jpg",
      ],
    },
  },
  {
    slug: "school-makeover",
    title: "School Makeover",
    parenthetical: "for painting, repairs, beautification",
    teaser: "Add color, warmth, and life to classrooms through painting and repair.",
    cardImage: "/images/support/card-school-makeover.jpg",
    ctaLabel: "Contribute",
    ctaHref: "https://rzp.io/rzp/HHHSClassroomCampaign",
    detail: {
      tagline: "Add color, warmth, and joy to the place children call their second home.",
      whyHeading: "Why We Need Your Help?",
      why: [
        "During the long COVID closure:",
        "Fungus spread across the walls, leaving classrooms dull and unhealthy.",
        "Paint peeled off, and surfaces became stained and cracked.",
        "Classrooms that once felt bright and welcoming now look tired and uninspiring.",
      ],
      planHeading: "Our Makeover Plan",
      plan: [
        "We want to bring back the energy and brightness our children deserve by:",
        "Applying fresh putty and paint to repair damage and restore walls.",
        "Adding colorful, child-friendly designs to make classrooms more engaging.",
        "Repairing classroom surfaces and minor structures to make them clean and safe.",
      ],
      howHeading: "How You Can Help",
      how: [
        "Your support can contribute to:",
        "The cost of paint and materials for a classroom.",
        "Wall artwork or learning visuals to enrich the space.",
        "Repair and maintenance expenses to restore each room.",
      ],
      closing: "Together, we can turn faded walls into bright spaces full of life and learning. Every contribution, big or small, helps us rebuild safe and inspiring spaces for our children.",
      images: [
        "/images/support/makeover-photo-01.jpg",
        "/images/support/makeover-photo-02.jpg",
        "/images/support/makeover-photo-03.jpg",
        "/images/support/makeover-photo-04.jpg",
      ],
    },
  },
  {
    slug: "bless-a-child",
    title: "Bless a Child",
    parenthetical: "for sponsoring student education",
    teaser: "Sponsor a child's education and open the door to a brighter future.",
    cardImage: "/images/initiatives/12-bless-a-child.jpg",
    ctaLabel: "Contribute",
    ctaHref: "https://rzp.io/rzp/B3og5gEa",
    detail: {
      tagline: "Give the gift of education and change a child's life forever.",
      whyHeading: "Why We Need Your Help?",
      why: [
        "Many deserving students struggle to continue their education because:",
        "They have lost one or both parents.",
        "Their families cannot afford school fees or daily expenses.",
        "They lack the basic materials needed to study with dignity.",
      ],
      planHeading: "Our Support Plan",
      plan: [
        "Through Bless a Child, you can help a child continue their education by:",
        "Sponsoring school fees, books, uniforms, and stationery.",
        "Extending support for transportation, ensuring regular attendance.",
        "Enabling children to learn in an environment free from financial worry.",
      ],
      howHeading: "How You Can Help",
      how: [
        "You may choose to:",
        "Sponsor a child's annual education fully or partially.",
        "Contribute specific essentials like books, uniforms, or stationery.",
        "Support transportation costs for students traveling from distant areas.",
      ],
      closing: "Your contribution helps a child stay in school, learn with dignity, and dream with confidence.",
      images: ["/images/support/bless-a-child-photo.jpg"],
    },
  },
  {
    slug: "gift-a-teacher",
    title: "Gift a Teacher",
    parenthetical: "for supporting teachers' salaries",
    teaser: "Support our teachers who nurture young minds every single day.",
    cardImage: "/images/initiatives/13-gift-a-teacher.jpg",
    ctaLabel: "Express Interest",
    ctaHref: "https://forms.gle/dAkcxGMhCxg7Tr849",
    detail: {
      tagline: "Support the hearts and minds that shape our students every day.",
      whyHeading: "Why We Need Your Help?",
      why: [
        "Behind every child's growth is a teacher who guides, inspires, and believes in them. But:",
        "Many of our students cannot afford fees.",
        "The school continues to provide quality teaching despite limited resources.",
        "Salaries for our dedicated teachers remain one of our biggest financial commitments.",
      ],
      planHeading: "Our Teacher Support Plan",
      plan: [
        "Through the Gift a Teacher initiative, you can help us:",
        "Fully or partially sponsor a teacher's salary.",
        "Retain experienced and passionate educators who nurture every student.",
        "Ensure continuous, quality education for all children, regardless of background.",
      ],
      howHeading: "How You Can Help",
      how: [
        "Your contribution can:",
        "Sponsor a teacher's monthly or annual salary.",
        "Help us bridge the salary gap for non-fee-paying students.",
        "Strengthen the foundation of teaching and learning at HH High School.",
      ],
      closing: "When you support a teacher, you empower dozens of children every single day. Every contribution, big or small, helps us rebuild safe and inspiring spaces for our children.",
      images: ["/images/support/gift-a-teacher-photo.jpg"],
    },
  },
];

export const supportUsIntro = {
  hero: {
    heading: "Support Education. Restore Hope. Empower Lives.",
    subheading: "When you support H. H. High School, you help every child learn with dignity and dream without limits.",
    image: "/images/support/hero-banner.png",
  },
  whyCards: [
    {
      title: "Why Your Support Matters",
      color: "accolades" as const,
      points: [
        "Every child deserves a space to learn, grow, and dream.",
        "Your support builds classrooms, sustains teachers, and keeps learning alive.",
        "Each contribution directly creates opportunities for success.",
      ],
    },
    {
      title: "Every Gift Creates Impact",
      color: "story" as const,
      points: [
        "No help is ever too small.",
        "Your generosity funds classrooms, scholarships, and teaching resources.",
        "Every rupee helps a child dream bigger and learn better.",
      ],
    },
    {
      title: "Join Us—Shape Brighter Futures",
      color: "gallery" as const,
      points: [
        "Together, we make dreams possible.",
        "Choose an initiative that speaks to you and be part of lasting change.",
        "Your involvement strengthens hope and learning for every child.",
      ],
    },
  ],
  waysToGiveIntro: "Your contribution can make a lasting difference. Discover the many ways you can help our children learn better.",
};
