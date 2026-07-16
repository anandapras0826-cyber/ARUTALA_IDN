import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CatalogSection } from "@/components/CatalogSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FaqSection } from "@/components/FaqSection";
import { OrderSection } from "@/components/OrderSection";
import { DesignGuidelineSection } from "@/components/DesignGuidelineSection";
import { BlogSection } from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full flex flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <CatalogSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DesignGuidelineSection />
        <PortfolioSection />
        <TestimonialSection />
        <FaqSection />
        <BlogSection />
        <OrderSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
