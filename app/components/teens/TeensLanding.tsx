import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Hook } from "./Hook";
import { Funnel } from "./Funnel";
import { StoryStrip } from "./StoryStrip";
import { Sensory } from "./Sensory";
import { Referral } from "./Referral";
import { EventCard } from "./EventCard";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";

// Página completa de Masfarré Teens — La Experiencia.
// Se usa tanto en /teens (URL permanente) como, por ahora, en la home (/) —
// ver app/page.tsx para la nota sobre por qué.
export function TeensLanding() {
  return (
    <>
      <div className="blob w-[520px] h-[520px] top-[1400px] -right-[220px]" />
      <Nav />
      <main>
        <Hero />
        <Hook />
        <Funnel />
        <StoryStrip />
        <Sensory />
        <Referral />
        <EventCard />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
