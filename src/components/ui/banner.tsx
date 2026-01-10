"use client"

import * as React from "react"
import { X, Link2 } from "lucide-react"
import { cn } from "@/lib/utils"

function Grid({
  cellSize = 12,
  strokeWidth = 1,
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

interface BannerProps {
  show: boolean
  onHide: () => void
  icon?: React.ReactNode
  title: React.ReactNode
  action: {
    label: string
    onClick: () => void
  }
  learnMoreUrl?: string
}

export function Banner({
  show,
  onHide,
  icon,
  title,
  action,
  learnMoreUrl,
}: BannerProps) {
  if (!show) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] isolate flex items-center justify-center gap-2 sm:gap-3 overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 px-3 py-1 sm:py-1.5">
      <Grid
        cellSize={14}
        strokeWidth={0.6}
        patternOffset={[0, 2]}
        className="text-white/30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 via-transparent to-orange-600/50 pointer-events-none" />

      <div className="relative flex items-center gap-1.5">
        <Link2 className="h-3.5 w-3.5 text-white" />
        <p className="text-[11px] sm:text-xs text-white font-medium">
          Consulta gratuita por tempo limitado
        </p>
      </div>

      <a
        href="https://wa.me/+5547984682257?text=Tenho%20interesse%20em%20escalar%20a%20minha%20empresa%20com%20tr%C3%A1fego%20pago%2C%20web%20site%20e%20automa%C3%A7%C3%A3o"
        target="_blank"
        rel="noopener noreferrer"
        className="relative shrink-0 text-[11px] sm:text-xs font-bold text-white underline underline-offset-2 hover:opacity-80"
      >
        Agendar
      </a>

      <button onClick={onHide} className="absolute right-2 p-0.5 text-white/70 hover:text-white z-10">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
