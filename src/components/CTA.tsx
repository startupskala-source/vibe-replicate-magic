import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5547984682257?text=Olá! Gostaria de agendar uma consultoria gratuita com a SKALA.",
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-muted rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">Seu próximo passo</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4 mb-4 sm:mb-6">
            Pronto para <span className="text-gradient">transformar</span> seu negócio?
          </h2>
          <p className="text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto text-sm sm:text-base px-4">
            Agende uma conversa gratuita e descubra como podemos ajudar sua empresa
            a vender mais e crescer de forma consistente.
          </p>

          <div className="flex justify-center px-4">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleClick}
            >
              Agendar Consultoria Grátis
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
