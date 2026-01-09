import { motion } from "framer-motion";
import { Palette, Zap, Megaphone, Globe, Video } from "lucide-react";

const modules = [
  { icon: Palette, label: "Design", level: 0 },
  { icon: Zap, label: "Automação", level: 2 },
  { icon: Megaphone, label: "Tráfego Pago", level: 3 },
  { icon: Globe, label: "Web Sites", level: 2 },
  { icon: Video, label: "Edição de Vídeo", level: 0 },
];

const ModulesChart = () => {
  return (
    <div className="w-full">
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 sm:p-6">
        {/* Chart Title */}
        <div className="text-center mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary">
            MÓDULOS & PLANOS
          </span>
        </div>

        {/* Chart Container */}
        <div className="flex gap-2 sm:gap-4">
          {/* Y-Axis Labels */}
          <div className="flex flex-col justify-between h-28 sm:h-32 shrink-0">
            <span className="text-[8px] sm:text-[10px] font-mono text-muted-foreground uppercase">ADVANCED</span>
            <span className="text-[8px] sm:text-[10px] font-mono text-muted-foreground uppercase">PRO</span>
            <span className="text-[8px] sm:text-[10px] font-mono text-muted-foreground uppercase">BASIC</span>
          </div>

          {/* Bars Area */}
          <div className="flex-1 min-w-0">
            {/* Grid Lines + Bars */}
            <div className="relative h-28 sm:h-32 border-l border-b border-border/40">
              {/* Horizontal Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-border/20 w-full" />
                <div className="border-t border-border/20 w-full" />
                <div className="border-t border-border/20 w-full" />
              </div>

              {/* Bars */}
              <div className="absolute inset-0 flex items-end justify-around px-1 sm:px-2 pb-1">
                {modules.map((module, index) => (
                  <motion.div
                    key={module.label}
                    initial={{ height: 0 }}
                    whileInView={{ height: module.level === 0 ? 3 : `${(module.level / 3) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`w-4 sm:w-6 rounded-t overflow-hidden relative ${
                      module.level === 0
                        ? "bg-muted-foreground/30"
                        : ""
                    }`}
                  >
                    {module.level > 0 && (
                      <>
                        {/* Orange gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400" />

                        {/* Grid pattern overlay */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern
                              id={`barGrid-${index}`}
                              width="6"
                              height="6"
                              patternUnits="userSpaceOnUse"
                            >
                              <path
                                d="M 6 0 L 0 0 0 6"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="0.5"
                              />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#barGrid-${index})`} opacity="0.8" />
                        </svg>

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* X-Axis Labels with Icons */}
            <div className="flex justify-around pt-2 sm:pt-3">
              {modules.map((module) => (
                <div key={module.label} className="flex flex-col items-center gap-1 w-10 sm:w-14">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-muted/50 flex items-center justify-center">
                    <module.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                  </div>
                  <span className="text-[6px] sm:text-[8px] font-mono text-muted-foreground text-center leading-tight uppercase">
                    {module.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-border/20">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-orange-600 to-orange-400" />
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">Incluído</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-muted-foreground/30" />
            <span className="text-[9px] sm:text-[10px] text-muted-foreground">Opcional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesChart;
