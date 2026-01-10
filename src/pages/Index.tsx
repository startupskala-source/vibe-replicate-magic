import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Banner } from "@/components/ui/banner";
import { NewsletterSection } from "@/components/ui/newsletter-section";
import IntegrationsSection from "@/components/ui/integrations-section";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import DetailedServices from "@/components/DetailedServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import CasesSection from "@/components/CasesSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleSubscribe = async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Banner
        show={showBanner}
        onHide={() => setShowBanner(false)}
        icon={<Sparkles className="h-4 w-4 text-white" />}
        title={
          <>
            <span className="font-semibold">Consulta gratuita</span> disponível por tempo limitado
          </>
        }
        action={{
          label: "Agendar Agora",
          onClick: () => window.open("https://wa.me/5547984682257?text=Olá! Vi a promoção no site e gostaria de agendar uma consultoria gratuita.", "_blank"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <IntegrationsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Services />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <DetailedServices />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CasesSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <CTA />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <NewsletterSection
            title="Receba estratégias exclusivas para aumentar suas vendas toda semana."
            onSubscribe={handleSubscribe}
          />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
