import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PrivateDiningNav } from "@/components/private-dining/PrivateDiningNav";
import { PrivateHero } from "@/components/private-dining/PrivateHero";
import { RoomDetails } from "@/components/private-dining/RoomDetails";
import { SampleMenu } from "@/components/private-dining/SampleMenu";
import { CinematicImage } from "@/components/private-dining/CinematicImage";
import { EnquiryForm } from "@/components/private-dining/EnquiryForm";
import { PageFadeIn } from "@/components/ui/PageFadeIn";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const metadata: Metadata = {
  title: "Private Dining",
  description:
    "Private dining at Ember House — an intimate room for up to 18 guests in Batley, West Yorkshire. A fictional demonstration page.",
};

export default function PrivateDiningPage() {
  return (
    <PageFadeIn>
      <PrivateDiningNav />
      <main id="main">
        <PrivateHero
          media={
            <ImageWithFallback
              src="/images/private-hero.png"
              alt="The private dining room at Ember House, set for an evening"
              className="absolute inset-0 h-full w-full"
              priority
              sizes="100vw"
            />
          }
        />
        <RoomDetails />
        <SampleMenu />
        <CinematicImage />
        <EnquiryForm />
      </main>
      <Footer />
    </PageFadeIn>
  );
}
