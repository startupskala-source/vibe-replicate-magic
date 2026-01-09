import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { forwardRef, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedBeam } from '@/components/ui/animated-beam';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Circle component for AnimatedBeam
const Circle = forwardRef<HTMLDivElement, {
  className?: string;
  children?: React.ReactNode;
}>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border-2 bg-background p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

// Icons for the beam animation
const Icons = {
  notion: () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#ffffff" />
      <path fillRule="evenodd" clipRule="evenodd" d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917z" fill="#000000" />
    </svg>
  ),
  googleDrive: () => (
    <svg width="100" height="100" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
      <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
      <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
      <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
      <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
      <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
      <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
    </svg>
  ),
  whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 175.216 175.552">
      <defs>
        <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
      <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
    </svg>
  ),
};

// Skala Logo placeholder
const SkalaLogo = () => (
  <div className="w-full h-full flex items-center justify-center font-display text-lg">
    SK
  </div>
);

// AnimatedBeam Services Demo
function AnimatedBeamServicesDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex h-[350px] sm:h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-xl bg-background p-4 sm:p-6 md:p-10" ref={containerRef}>
      <div className="flex size-full max-w-xs sm:max-w-md md:max-w-lg flex-col items-stretch justify-between gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-center">
          {/* Skala logo with orange animated border and pulsing glow */}
          <div ref={div4Ref} className="z-10 relative flex size-16 items-center justify-center">
            {/* Pulsing glow effect */}
            <div className="absolute inset-[-4px] rounded-full bg-orange-500/30 animate-pulse" />
            {/* Animated orange border */}
            <div className="absolute inset-[-3px] rounded-full overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full animate-spin"
                style={{ animationDuration: '3s' }}
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ea580c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* Inner container with logo */}
            <div className="relative z-10 flex size-full items-center justify-center rounded-full bg-background p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
              <SkalaLogo />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.googleDrive />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.notion />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="gray" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="gray" />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="gray" />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} reverse gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="gray" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse gradientStartColor="#22c55e" gradientStopColor="#16a34a" pathColor="gray" />
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6">
          <div className="mx-auto max-w-xl space-y-4 text-center">
            <h2 className="text-balance text-3xl font-medium md:text-4xl text-foreground">
              As principais ferramentas para o seu negócio fluir.
            </h2>
            <p className="text-muted-foreground">
              ​Somos a cabeça do processo que fará você vender mais, mais e mais.
            </p>
          </div>

          <Tabs defaultValue="services" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="services">Nossos Serviços</TabsTrigger>
              <TabsTrigger value="integrations">Integrações</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-0">
              <AnimatedBeamServicesDemo />
            </TabsContent>

            <TabsContent value="integrations" className="mt-0">
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <IntegrationCard title="GitHub" description="Hospedagem de código e controle de versão">
                  <GitHubLogo />
                </IntegrationCard>

                <IntegrationCard title="Slack" description="Plataforma de comunicação">
                  <SlackLogo />
                </IntegrationCard>

                <IntegrationCard title="Notion" description="Espaço de trabalho completo">
                  <NotionLogo />
                </IntegrationCard>

                <IntegrationCard title="Figma" description="Ferramenta de design colaborativo">
                  <FigmaLogo />
                </IntegrationCard>

                <IntegrationCard title="Discord" description="Comunicação em comunidades">
                  <DiscordLogo />
                </IntegrationCard>

                <IntegrationCard title="VS Code" description="Editor de código preferido">
                  <VSCodeLogo />
                </IntegrationCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  children,
  link = '#'
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  link?: string;
}) => {
  return (
    <Card className="border-border/50 rounded-xl p-4 transition hover:border-primary/30">
      <div className="flex flex-col gap-4">
        <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-muted/50">
          {children}
        </div>

        <div className="space-y-1">
          <h3 className="text-foreground font-medium">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>

        <div>
          <Button asChild variant="outline" size="sm">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Learn More
              <ChevronRight className="size-3" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

// Logo components
const GitHubLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const SlackLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
  </svg>
);

const NotionLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447z" />
  </svg>
);

const FigmaLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491z" />
  </svg>
);

const DiscordLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
  </svg>
);

const VSCodeLogo = () => (
  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352z" />
  </svg>
);
