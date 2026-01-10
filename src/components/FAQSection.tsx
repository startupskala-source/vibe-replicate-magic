import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custam os serviços da SKALA?",
    answer: "O investimento varia de acordo com o escopo do projeto e os serviços contratados. Oferecemos planos a partir de R$ 1.500/mês para gestão de redes sociais e a partir de R$ 2.000/mês para tráfego pago. Agende uma consultoria gratuita para receber uma proposta personalizada.",
  },
  {
    question: "Qual o prazo para ver resultados?",
    answer: "Os primeiros resultados em tráfego pago geralmente aparecem nas primeiras semanas. Para estratégias de conteúdo orgânico, o prazo é de 2-3 meses para resultados consistentes. Trabalhamos com metas claras e relatórios mensais para acompanhamento.",
  },
  {
    question: "Vocês atendem empresas de qualquer região?",
    answer: "Sim! Atendemos empresas de todo o Brasil de forma 100% remota. Temos clientes em diversos estados e adaptamos nossas estratégias para cada mercado local quando necessário.",
  },
  {
    question: "Como funciona a consultoria gratuita?",
    answer: "É uma reunião de 30-45 minutos onde analisamos sua situação atual, entendemos seus objetivos e apresentamos um diagnóstico inicial do seu negócio. Não há compromisso e você sai com insights valiosos independente de fechar conosco.",
  },
  {
    question: "Preciso ter um orçamento alto para investir em tráfego pago?",
    answer: "Não necessariamente. Trabalhamos com orçamentos a partir de R$ 1.000/mês em mídia. O importante é ter expectativas alinhadas - com investimentos maiores, conseguimos testar mais e escalar mais rápido.",
  },
  {
    question: "Vocês oferecem relatórios de resultados?",
    answer: "Sim! Enviamos relatórios semanais e mensais detalhados com todas as métricas relevantes. Além disso, você terá acesso a um dashboard em tempo real para acompanhar suas campanhas.",
  },
  {
    question: "Qual a duração mínima do contrato?",
    answer: "Nossos contratos são de no mínimo 3 meses, pois é o período necessário para implementar as estratégias e começar a ver resultados consistentes. Após esse período, a renovação é mensal.",
  },
  {
    question: "Posso contratar apenas um serviço específico?",
    answer: "Claro! Você pode contratar apenas tráfego pago, social media, automação ou qualquer outro serviço individualmente. Porém, oferecemos condições especiais para pacotes completos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative">
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
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wide mt-3 sm:mt-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Tire suas dúvidas sobre nossos serviços e como podemos ajudar seu negócio.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
