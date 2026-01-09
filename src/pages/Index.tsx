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
          onClick: () => window.open("https://calendly.com", "_blank"),
        }}
      />
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <IntegrationsSection />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Services />
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
    </div>
  );
};

export default Index;
