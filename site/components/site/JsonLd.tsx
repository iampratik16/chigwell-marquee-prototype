import { SITE, SOCIALS } from "@/lib/site";

/** Structured data, EventVenue / LocalBusiness for rich results. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/media/chigwell-marquees-large-marquee.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      postalCode: SITE.address.postcode,
      addressCountry: "GB",
    },
    maximumAttendeeCapacity: 1000,
    sameAs: SOCIALS.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
