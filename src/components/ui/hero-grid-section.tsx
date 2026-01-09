import * as React from "react";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function ButtonGrid({
  cellSize = 14,
  strokeWidth = 0.6,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number
  strokeWidth?: number
  patternOffset?: [number, number]
  className?: string
}) {
  const id = React.useId()

  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}>
      <defs>
        <pattern
          id={id}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
          x={patternOffset[0]}
          y={patternOffset[1]}
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}


interface HeroGridSectionProps {
  title?: ReactNode | string;
  subtitle?: ReactNode | string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  className?: string;
}

export function HeroGridSection({
  title = "Build, launch, and scale your product faster",
  subtitle = "A modern platform that helps teams ship better software with less effort.",
  primaryCtaText = "Request Demo",
  secondaryCtaText = "Get Started For Free",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  className,
}: HeroGridSectionProps) {
  return (
    <section className={cn("relative w-full", className)}>
      {/* Grid background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-8">

        {/* Title */}
        <h1 className="mb-4 max-w-4xl text-center text-4xl font-display uppercase tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Subtitle */}
        <h2 className="mb-8 max-w-2xl text-pretty text-center text-sm text-muted-foreground sm:text-base md:text-lg">
          {subtitle}
        </h2>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <MovingBorderButton
            borderRadius="0.5rem"
            containerClassName="h-12 w-auto"
            className="px-6 font-bold text-white bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 border-0 relative overflow-hidden"
            duration={3000}
            onClick={onPrimaryCtaClick}
          >
            <ButtonGrid
              cellSize={14}
              strokeWidth={0.6}
              patternOffset={[0, 2]}
              className="text-white/30 absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 via-transparent to-orange-600/50 pointer-events-none" />
            <span className="relative z-10">{primaryCtaText}</span>
          </MovingBorderButton>
        </div>
      </div>
    </section>
  );
}
