import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { CommunesTicker } from "@/components/CommunesTicker";
import { QuickLinks } from "@/components/QuickLinks";
import { IntroSection } from "@/components/IntroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { StatsBar } from "@/components/StatsBar";
import { StepsSection } from "@/components/StepsSection";
import { InvestSection } from "@/components/InvestSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSlider />
      <CommunesTicker />
      <QuickLinks />
      <IntroSection />
      <FeaturesGrid />
      <StatsBar />
      <StepsSection />
      <InvestSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
