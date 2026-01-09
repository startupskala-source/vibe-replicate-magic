"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

interface NewsletterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  onSubscribe?: (email: string) => Promise<{
    success: boolean;
    error?: string;
  }>;
  backgroundEffect?: boolean;
}

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className
}: {
  cellSize?: number;
  strokeWidth?: number;
  patternOffset?: [number, number];
  className?: string;
}) {
  const id = React.useId();
  return (
    <svg className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}>
      <defs>
        <pattern id={id} width={cellSize} height={cellSize} patternUnits="userSpaceOnUse" x={patternOffset[0]} y={patternOffset[1]}>
          <path d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`} fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function NewsletterSection({
  title = "Receba novidades e dicas exclusivas.",
  onSubscribe,
  backgroundEffect = true,
  className,
  ...props
}: NewsletterSectionProps) {
  const [formState, setFormState] = useState({
    email: "",
    status: "idle" as FormStatus,
    message: ""
  });
  const isLoading = formState.status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!onSubscribe) return;
    setFormState(prev => ({
      ...prev,
      status: "loading",
      message: ""
    }));
    try {
      const result = await onSubscribe(formState.email);
      if (!result.success) {
        setFormState(prev => ({
          ...prev,
          status: "error",
          message: result.error || ""
        }));
      } else {
        setFormState({
          email: "",
          status: "success",
          message: "Obrigado por se inscrever!"
        });
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        status: "error",
        message: error instanceof Error ? error.message : "Falha ao inscrever"
      }));
    }
  };

  return (
    <section className={cn("relative isolate overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500", className)} {...props}>
      {/* Grid pattern background */}
      <Grid cellSize={14} strokeWidth={0.6} patternOffset={[0, 2]} className="text-white/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 via-transparent to-orange-600/50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {backgroundEffect && <BackgroundEffect />}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <div className="w-full max-w-md lg:ml-auto">
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5 sm:flex-row">
              <label htmlFor="email-address" className="sr-only">
                Endereço de e-mail
              </label>
              <Input
                id="email-address"
                name="email"
                type="email"
                placeholder="Seu melhor e-mail"
                className="min-w-0 flex-auto"
                value={formState.email}
                onChange={e => setFormState(prev => ({
                  ...prev,
                  email: e.target.value
                }))}
                disabled={isLoading}
                aria-label="Inscreva-se na newsletter"
                required
              />
              <div className="relative group">
                <Button type="submit" disabled={isLoading} className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-0">
                  <span className="flex items-center gap-2">
                    Inscrever
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  {isLoading && (
                    <span className="ml-2">
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
            {formState.message && (
              <p className={cn("mt-3 text-sm", formState.status === "error" ? "text-destructive" : "text-white/80")}>
                {formState.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundEffect() {
  return (
    <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
      <div
        style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }}
        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-30"
      />
    </div>
  );
}
