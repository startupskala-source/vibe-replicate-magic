import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingCart, Target } from "lucide-react";

const cases = [
  {
    title: "E-commerce de Moda",
    industry: "Varejo",
    challenge: "Baixo tráfego e taxa de conversão abaixo de 1%",
    solution: "Implementação de estratégia completa de tráfego pago com funis otimizados",
    results: [
      { icon: TrendingUp, value: "+320%", label: "Faturamento" },
      { icon: Users, value: "+15K", label: "Novos Clientes" },
    ],
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    title: "Academia Local",
    industry: "Fitness",
    challenge: "Dificuldade em captar novos alunos e reter os existentes",
    solution: "Automação de WhatsApp + campanhas de remarketing segmentadas",
    results: [
      { icon: Users, value: "+200", label: "Novos Alunos/Mês" },
      { icon: Target, value: "85%", label: "Taxa Retenção" },
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Restaurante Premium",
    industry: "Gastronomia",
    challenge: "Pouca visibilidade online e reservas abaixo do esperado",
    solution: "Gestão de redes sociais + Google Ads para reservas",
    results: [
      { icon: ShoppingCart, value: "+180%", label: "Reservas" },
      { icon: TrendingUp, value: "4.9★", label: "Avaliação" },
    ],
    gradient: "from-purple-500/10 to-pink-500/10",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-16 sm:py-24 lg:py-32 relative bg-muted/30">
      <div className="absolute inset-0 grid-pattern opacity-10" />

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
            Cases de Sucesso
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4">
            Resultados que <span className="text-gradient">transformam</span>
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Veja como ajudamos empresas reais a alcançarem resultados extraordinários.
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${caseItem.gradient} border border-border hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {caseItem.industry}
                </span>
                <h3 className="text-xl font-semibold mt-2">{caseItem.title}</h3>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Desafio</p>
                <p className="text-sm text-foreground">{caseItem.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Solução</p>
                <p className="text-sm text-foreground">{caseItem.solution}</p>
              </div>

              {/* Results */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Resultados</p>
                <div className="grid grid-cols-2 gap-4">
                  {caseItem.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <result.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold text-gradient">{result.value}</p>
                      <p className="text-xs text-muted-foreground">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
