import { motion } from "framer-motion";
import { TextShimmer } from "./ui/text-shimmer";
import { HeroGridSection } from "./ui/hero-grid-section";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full hidden sm:block"
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-primary/50 rounded-full hidden sm:block"
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/70 rounded-full hidden sm:block"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Team Photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center mb-8"
          >
            {[team1, team2, team3, team4].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
                style={{ marginLeft: index === 0 ? 0 : -12, zIndex: 4 - index }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-background shadow-lg ring-2 ring-primary/20">
                  <img
                    src={img}
                    alt={`Team member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hero Grid Section */}
          <HeroGridSection
            title={
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                <TextShimmer
                  duration={2}
                  spread={4}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase tracking-wide [--base-color:theme(colors.zinc.900)] [--base-gradient-color:theme(colors.zinc.400)] dark:[--base-color:theme(colors.zinc.100)] dark:[--base-gradient-color:theme(colors.zinc.400)]"
                >
                  Resultados reais para seu negócio
                </TextShimmer>
              </motion.span>
            }
            subtitle={
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Chega de investir em marketing sem retorno. Criamos estratégias digitais que atraem clientes,
                aumentam vendas e fazem sua empresa crescer de verdade.
              </motion.span>
            }
            primaryCtaText="Quero Crescer Agora"
            secondaryCtaText="Ver Resultados"
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: "150+", label: "Projetos de Sucesso" },
              { value: "98%", label: "Taxa de Satisfação" },
              { value: "5+", label: "Anos de Experiência" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
