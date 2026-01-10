import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Ajudar empresas a crescerem de forma escalável através de estratégias digitais personalizadas e resultados mensuráveis.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em marketing digital no Brasil, transformando a forma como empresas se conectam com seus clientes.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Transparência, comprometimento com resultados, inovação constante e parceria genuína com nossos clientes.",
  },
  {
    icon: Award,
    title: "Diferenciais",
    description: "Atendimento personalizado, estratégias baseadas em dados e foco total no retorno sobre investimento.",
  },
];

const teamMembers = [
  { image: team1, name: "Membro 1" },
  { image: team2, name: "Membro 2" },
  { image: team3, name: "Membro 3" },
  { image: team4, name: "Membro 4" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4">
            Conheça a <span className="text-gradient">SKALA</span>
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Somos uma agência de marketing digital focada em resultados. Nascemos da vontade de ajudar 
            empresas a crescerem de verdade, com estratégias personalizadas e um time apaixonado por 
            transformar negócios.
          </p>
        </motion.div>

        {/* Team Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 sm:mb-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-border shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
