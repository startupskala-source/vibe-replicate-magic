import { useRef, useId } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
function Grid({
  cellSize = 14,
  strokeWidth = 0.6,
  patternOffset = [0, 2],
  className
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = useId();
  return <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}>
      <defs>
        <pattern id={id} width={cellSize} height={cellSize} patternUnits="userSpaceOnUse" x={patternOffset[0]} y={patternOffset[1]}>
          <path d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>;
}
const testimonials = [{
  id: 1,
  name: "Carlos Eduardo",
  role: "CEO, TechStart",
  content: "A Skala transformou completamente nossa presença digital. Nosso faturamento aumentou 340% em apenas 6 meses com as estratégias implementadas.",
  rating: 5,
  metric: {
    label: "Aumento no faturamento",
    value: 340
  },
  image: client1
}, {
  id: 2,
  name: "Rafael Santos",
  role: "Diretor de Marketing, ModaPlus",
  content: "Profissionais excepcionais! A automação de WhatsApp nos ajudou a atender 5x mais clientes sem aumentar a equipe.",
  rating: 5,
  metric: {
    label: "Aumento em atendimentos",
    value: 500
  },
  image: client2
}, {
  id: 3,
  name: "Roberto Almeida",
  role: "Fundador, Delivery Express",
  content: "O ROI das campanhas de tráfego pago foi impressionante. Cada real investido retornou 8x em vendas.",
  rating: 5,
  metric: {
    label: "Retorno sobre investimento",
    value: 800
  },
  image: client3
}];
const TestimonialCard = ({
  testimonial,
  index
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px"
  });
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 40
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 40
  }} transition={{
    duration: 0.6,
    delay: index * 0.15,
    ease: [0.25, 0.1, 0.25, 1]
  }} className="relative group">
      <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Quote icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="h-12 w-12 text-orange-500" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({
          length: testimonial.rating
        }).map((_, i) => <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />)}
        </div>

        {/* Content */}
        <p className="text-foreground/80 text-sm leading-relaxed mb-6">
          "{testimonial.content}"
        </p>

        {/* Progress metric */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground">{testimonial.metric.label}</span>
            <span className="text-sm font-bold text-gradient">+{testimonial.metric.value}%</span>
          </div>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-green-100">
            <div 
              className="h-full rounded-full animate-liquid-flow"
              style={{ 
                width: `${Math.min(testimonial.metric.value / 10, 100)}%`,
                background: 'linear-gradient(90deg, #22c55e, #4ade80, #86efac, #4ade80, #22c55e)',
                backgroundSize: '200% 100%',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-liquid-wave" />
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover border-2 border-orange-200 shadow-md" />
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>;
};
const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });
  return <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden isolate">
      {/* Gradient background like banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500" />
      
      {/* Grid pattern */}
      <Grid cellSize={14} strokeWidth={0.6} patternOffset={[0, 2]} className="text-white/20" />
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 via-transparent to-orange-600/50 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
            Feedbacks
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4">
            O QUE NOSSOS CLIENTES DIZEM
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base lg:text-lg">
            Resultados reais de empresas que confiaram na Skala para transformar seus negócios
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />)}
        </div>

        {/* Bottom stats */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }} className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-8 lg:gap-16">
          {[{
          value: "150+",
          label: "Clientes satisfeitos"
        }, {
          value: "98%",
          label: "Taxa de satisfação"
        }, {
          value: "R$50M+",
          label: "Em vendas geradas"
        }].map((stat, index) => <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </div>)}
        </motion.div>
      </div>
    </section>;
};
export default Testimonials;