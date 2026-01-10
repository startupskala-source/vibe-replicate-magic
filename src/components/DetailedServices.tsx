import { motion } from "framer-motion";
import { 
  Target, 
  Share2, 
  Video, 
  ShoppingCart, 
  MessageCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description: "Campanhas estratégicas no Meta Ads e Google Ads para atrair clientes qualificados e maximizar seu ROI.",
    features: ["Facebook & Instagram Ads", "Google Ads & YouTube", "Remarketing Inteligente"],
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Gestão completa das suas redes sociais com conteúdo estratégico que engaja e converte.",
    features: ["Planejamento de Conteúdo", "Gestão de Comunidade", "Análise de Métricas"],
  },
  {
    icon: Video,
    title: "Produção de Conteúdo",
    description: "Criação de vídeos e conteúdos visuais profissionais que capturam a atenção do seu público.",
    features: ["Vídeos para Redes Sociais", "Edição Profissional", "Roteiros Estratégicos"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Shopify",
    description: "Desenvolvimento e gestão de lojas virtuais otimizadas para conversão e vendas.",
    features: ["Criação de Loja Virtual", "Otimização de Conversão", "Integração de Pagamentos"],
  },
  {
    icon: MessageCircle,
    title: "Automação WhatsApp",
    description: "Automatize seu atendimento e vendas pelo WhatsApp com fluxos inteligentes.",
    features: ["Chatbots Personalizados", "Funis de Vendas", "Atendimento 24/7"],
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description: "Análise completa do seu negócio com plano de ação personalizado para crescimento.",
    features: ["Diagnóstico Digital", "Planejamento Estratégico", "Mentoria Contínua"],
  },
];

const DetailedServices = () => {
  return (
    <section id="servicos" className="py-16 sm:py-24 lg:py-32 relative bg-muted/30">
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
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4">
            Soluções completas para seu <span className="text-gradient">crescimento</span>
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Do tráfego pago à automação, oferecemos tudo que sua empresa precisa para escalar no digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            size="lg"
            className="group"
            onClick={() => window.open("https://wa.me/5547984682257?text=Olá! Gostaria de saber mais sobre os serviços da SKALA.", "_blank")}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DetailedServices;
