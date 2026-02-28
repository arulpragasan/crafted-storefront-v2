import { cn } from "@/lib/utils"
import React from "react"

type Variant =
  // Headings
  | "display-xl"
  | "display-lg"
  | "section"
  | "subsection"
  | "card"

  // Body
  | "body"
  | "body-lg"
  | "muted"
  | "small"
  | "caption"

interface TypographyProps {
  as?: React.ElementType
  variant?: Variant
  children: React.ReactNode
  className?: string
}

/**
 * Unified Typography System
 * - Serif for headings
 * - Sans for body
 * - Editorial hierarchy
 */

const variantStyles: Record<Variant, string> = {
  // ======================
  // HEADINGS
  // ======================

  "display-xl":
    "font-serif text-5xl md:text-6xl leading-tight tracking-tight",

  "display-lg":
    "font-serif text-4xl md:text-5xl leading-tight tracking-tight",

  section:
    "font-serif text-3xl md:text-4xl leading-snug",

  subsection:
    "font-serif text-2xl md:text-3xl leading-snug",

  card:
    "font-serif text-xl leading-snug",

  // ======================
  // BODY
  // ======================

  body:
    "font-sans text-base text-neutral-600 leading-relaxed",

  "body-lg":
    "font-sans text-lg text-neutral-600 leading-relaxed",

  muted:
    "font-sans text-sm text-neutral-500",

  small:
    "font-sans text-sm text-neutral-400",

  caption:
    "font-sans text-sm text-neutral-400 tracking-wide uppercase",
}

export function Typography({
  as: Tag = "p",
  variant = "body",
  children,
  className,
}: TypographyProps) {
  return (
    <Tag className={cn(variantStyles[variant], className)}>
      {children}
    </Tag>
  )
}