import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { SignatureMenu } from "@/components/sections/SignatureMenu";
import { ExpandingStory } from "@/components/sections/ExpandingStory";
import { FirePhilosophy } from "@/components/sections/FirePhilosophy";
import { PrivateDiningTeaser } from "@/components/sections/PrivateDiningTeaser";
import { VisitSection } from "@/components/sections/VisitSection";
import { ReservationCTA } from "@/components/sections/ReservationCTA";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IntroSection />
        <SignatureMenu />
        <ExpandingStory
          media={
            <ImageWithFallback
              src="/images/story-wide.png"
              alt="The Ember House dining room"
              className="h-full w-full"
              sizes="100vw"
            />
          }
          reducedMotionMedia={
            <ImageWithFallback
              src="/images/story-wide.png"
              alt="The Ember House dining room"
              className="aspect-video w-full"
              sizes="90vw"
            />
          }
        />
        <FirePhilosophy
          media={
            <ImageWithFallback
              src="/images/fire-detail.png"
              alt="Detail of the open flame grill at Ember House"
              className="h-full w-full"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          }
        />
        <PrivateDiningTeaser />
        <VisitSection />
        <ReservationCTA
          media={
            <ImageWithFallback
              src="/images/reservation-background.png"
              alt="The dining room at Ember House lit for evening service"
              className="absolute inset-0 h-full w-full"
              sizes="100vw"
            />
          }
        />
      </main>
      <Footer />
    </>
  );
}
