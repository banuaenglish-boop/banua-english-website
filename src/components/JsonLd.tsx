import { absoluteUrl, breadcrumbLabels, siteConfig } from "@/lib/site";

type JsonLdProps = { data: unknown };

/** Generic JSON-LD script. Data is ours (site/CMS), not user HTML. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Root Organization + LocalBusiness + WebSite. */
export default function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            legalName: siteConfig.legalName,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phoneE164,
            sameAs: [...siteConfig.sameAs],
            logo: `${siteConfig.url}/logo.png`,
          },
          {
            "@type": ["LocalBusiness", "EducationalOrganization"],
            "@id": `${siteConfig.url}/#localbusiness`,
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phoneE164,
            image: `${siteConfig.url}/logo.png`,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.city,
              addressRegion: siteConfig.region,
              addressCountry: siteConfig.country,
            },
            areaServed: [
              { "@type": "City", name: siteConfig.city },
              { "@type": "Country", name: "Indonesia" },
            ],
            openingHours: siteConfig.hours,
            sameAs: [...siteConfig.sameAs],
            parentOrganization: { "@id": `${siteConfig.url}/#organization` },
          },
          {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            inLanguage: "id-ID",
          },
        ],
      }}
    />
  );
}

export function breadcrumbJsonLd(path: string) {
  const segments = path.split("/").filter(Boolean);
  const items = [
    { path: "/", name: breadcrumbLabels["/"] },
    ...segments.map((segment, index) => {
      const itemPath = `/${segments.slice(0, index + 1).join("/")}`;
      return { path: itemPath, name: breadcrumbLabels[itemPath] ?? segment };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function courseListJsonLd(
  programs: { title: string; description: string; mode: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((program, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: program.title,
        description: program.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          sameAs: siteConfig.url,
        },
        educationalLevel: program.mode,
        inLanguage: "id-ID",
        isAccessibleForFree: false,
        offers: {
          "@type": "Offer",
          category: "Paid",
          url: absoluteUrl("/program"),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}
