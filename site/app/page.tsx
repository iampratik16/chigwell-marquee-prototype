import Hero from "@/components/sections/home/Hero";
import IntroStatement from "@/components/sections/home/IntroStatement";
import TwoSpaces from "@/components/sections/home/TwoSpaces";
import OccasionsPreview from "@/components/sections/home/OccasionsPreview";
import StatsBand from "@/components/sections/home/StatsBand";
import GalleryRail from "@/components/sections/home/GalleryRail";
import CaseStudies from "@/components/sections/home/CaseStudies";
import Journey from "@/components/sections/home/Journey";
import JsonLd from "@/components/site/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <IntroStatement />
      <TwoSpaces />
      <OccasionsPreview />
      <StatsBand />
      <GalleryRail />
      <CaseStudies />
      <Journey />
    </>
  );
}
