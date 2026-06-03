import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = [
  "",
  "/the-estate",
  "/spaces",
  "/spaces/mega-marquee",
  "/spaces/mini-marquee",
  "/spaces/secret-garden",
  "/occasions",
  "/occasions/weddings",
  "/occasions/celebrations",
  "/occasions/corporate",
  "/gallery",
  "/visit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE.url}${r}`,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
