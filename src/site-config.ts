import { SITE_URL } from "../site-url";

/** Canonical site URL (set NEXT_PUBLIC_SITE_URL in production, e.g. https://yoursite.com) */
export { SITE_URL };

export const SITE_NAME = "Martin Kozmelj";

export const DEFAULT_DESCRIPTION =
  "Senior software engineer at Sportradar, based in Slovenia. I build with React, Next.js and TypeScript and write about working with teams and AI.";

export const SITE_TAGLINE = "Senior Software Engineer";

export const OG_IMAGE_PATH = "/api/og";

export const TWITTER_HANDLE = "@martinkozmelj";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Martin Kozmelj",
      givenName: "Martin",
      familyName: "Kozmelj",
      jobTitle: "Senior Software Engineer",
      description: DEFAULT_DESCRIPTION,
      image: `${SITE_URL}/portret-lighting.webp`,
      email: "mailto:martin@kozmelj.si",
      url: SITE_URL,
      mainEntityOfPage: { "@id": `${SITE_URL}/#profile` },
      worksFor: {
        "@type": "Organization",
        name: "Sportradar",
        url: "https://sportradar.com/",
      },
      address: { "@type": "PostalAddress", addressCountry: "SI" },
      homeLocation: { "@type": "Country", name: "Slovenia" },
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Software Engineer",
        occupationLocation: { "@type": "Country", name: "Slovenia" },
        skills:
          "React, Next.js, TypeScript, Angular, Nest.js, Remix, AWS, Scrum, team leadership",
      },
      makesOffer: {
        "@type": "Offer",
        availability: "https://schema.org/LimitedAvailability",
        itemOffered: {
          "@type": "Service",
          name: "Part-time freelance web development",
          serviceType: "Web development",
          provider: { "@id": PERSON_ID },
        },
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Angular",
        "Nest.js",
        "Remix",
        "Full-stack web development",
        "Engineering management",
        "Scrum",
        "AI-assisted development",
      ],
      sameAs: [
        "https://github.com/mkozmelj",
        "https://www.linkedin.com/in/martinkozmelj/",
        "https://instagram.com/martinkozmelj",
        "https://x.com/martinkozmelj",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: `${SITE_NAME} | ${SITE_TAGLINE}`,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
    },
  ],
} as const;
