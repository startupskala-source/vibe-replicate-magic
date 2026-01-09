import { motion } from "framer-motion";
import ModulesChart from "./ui/modules-chart";

const Services = () => {
  return (
    <section id="serviços" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              O Que Fazemos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4">
              Estratégias precisas para{" "}
              <span className="text-gradient">resultados reais</span>
            </h2>
            <p className="text-muted-foreground mt-4 sm:mt-6 max-w-xl text-sm sm:text-base">
              Sem achismos, sem desperdício. Cada ação é calculada para maximizar seu retorno e acelerar seu crescimento.
            </p>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-end w-full max-w-md"
          >
            <ModulesChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
