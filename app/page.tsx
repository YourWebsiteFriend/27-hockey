import { HeroSection } from "@/app/components/sections/HeroSection";
import { CredentialBar } from "@/app/components/sections/CredentialBar";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { ProofSection } from "@/app/components/sections/ProofSection";
import { ProgramsSection } from "@/app/components/sections/ProgramsSection";
import { MarqueeSection } from "@/app/components/sections/MarqueeSection";
import { TestimonialsSection } from "@/app/components/sections/TestimonialsSection";
import { ContactSection } from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredentialBar />
      <AboutSection />
      <SkillsSection />
      <ProofSection />
      <ProgramsSection />
      <MarqueeSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
