/**
 * Typography — Crafted Design System
 *
 * ─── SECTION 1 — Legacy primitives ───────────────────────────────────────────
 *
 * Title, Subtitle, CardTitle, Text, Muted
 *
 * @deprecated
 * These are temporary migration bridges only. Do not use in new feature code.
 * Prefer the semantic CVA primitives in Section 2.
 *
 * Migration targets:
 *   Title      → Headline
 *   Subtitle   → Subheading
 *   CardTitle  → CardHeading
 *   Text       → Body
 *   Muted      → Caption (tone="muted") or Meta for label roles
 *
 * ─── SECTION 2 — Semantic CVA primitives ─────────────────────────────────────
 *
 * Display, Headline, Subheading, CardHeading, SectionTitle, Body, Meta, Caption
 *
 * Hierarchy (top → bottom):
 *   Display      — hero / big-moment headlines
 *   Headline     — page / section-level headings
 *   Subheading   — subsection headings
 *   CardHeading  — card-level headings
 *   SectionTitle — configurable section/card titles (size variants)
 *   Body         — running prose
 *   Caption      — secondary captions
 *   Meta         — editorial labels / eyebrows
 *
 * Governed by styles/design-system/typography.ts tokens.
 * All primitives support:
 *   tone:   default | muted | inverse
 *   align:  left | center | right
 *
 * SectionTitle additionally supports:
 *   size:   default | compact | card | section
 *
 * Caption additionally supports:
 *   variant: editorial | plain
 */

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ─── Element type constraints ─────────────────────────────────────────────────

type HeadingElement = "h1" | "h2" | "h3" | "h4"
type BlockElement   = "p" | "div"
type InlineElement  = "span" | "label" | "time"

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — Legacy primitives
// Preserved as migration bridges. Do not use in new feature components.
// ─────────────────────────────────────────────────────────────────────────────

interface LegacyProps {
  children: React.ReactNode
  className?: string
}

/**
 * @deprecated Use `Headline` instead.
 * Maps to: typeScale.title — font-serif text-3xl md:text-4xl leading-snug
 */
export function Title({ children, className }: LegacyProps) {
  return (
    <h2 className={cn("font-serif text-3xl md:text-4xl leading-snug", className)}>
      {children}
    </h2>
  )
}

/**
 * @deprecated Use `SectionTitle` instead.
 * Maps to: typeScale.subtitle — font-serif text-2xl md:text-3xl leading-snug
 */
export function Subtitle({ children, className }: LegacyProps) {
  return (
    <h3 className={cn("font-serif text-2xl md:text-3xl leading-snug", className)}>
      {children}
    </h3>
  )
}

/**
 * @deprecated Use `SectionTitle` with `as="h4"` instead.
 * Maps to: typeScale.cardTitle — font-serif text-xl leading-snug
 */
export function CardTitle({ children, className }: LegacyProps) {
  return (
    <h4 className={cn("font-serif text-xl leading-snug", className)}>
      {children}
    </h4>
  )
}

/**
 * @deprecated Use `Body` instead.
 * Maps to: typeScale.text — font-sans text-base text-neutral-600 leading-relaxed
 */
export function Text({ children, className }: LegacyProps) {
  return (
    <p className={cn("font-sans text-base text-neutral-600 leading-relaxed", className)}>
      {children}
    </p>
  )
}

/**
 * @deprecated Use `Caption` with `tone="muted"` for secondary text,
 * or `Meta` for editorial label / brand identifier roles.
 * Maps to: typeScale.muted — font-sans text-sm text-neutral-500
 */
export function Muted({ children, className }: LegacyProps) {
  return (
    <p className={cn("font-sans text-sm text-neutral-500", className)}>
      {children}
    </p>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — Semantic CVA primitives
// Use these in all new and migrated feature components.
// Token source: styles/design-system/typography.ts
// ─────────────────────────────────────────────────────────────────────────────

// ── Display ───────────────────────────────────────────────────────────────────
// Hero / big-moment headline.
// Token: fluidTypeScale.display
// font-serif · clamp(2.5rem,5vw,4.5rem) · leading-[1.05] · tracking-[-0.02em]

const displayVariants = cva(
  "font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.02em]",
  {
    variants: {
      tone: {
        default: "text-neutral-900",
        muted:   "text-neutral-500",
        inverse: "text-white",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      tone:  "default",
      align: "left",
    },
  }
)

interface DisplayProps extends VariantProps<typeof displayVariants> {
  as?: HeadingElement
  children: React.ReactNode
  className?: string
}

export function Display({ as: Tag = "h1", tone, align, children, className }: DisplayProps) {
  return (
    <Tag className={cn(displayVariants({ tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── Headline ──────────────────────────────────────────────────────────────────
// Page / section-level heading.
// Token: fluidTypeScale.headline
// font-serif · clamp(1.5rem,2.5vw,2.25rem) · leading-[1.2] · tracking-[-0.01em]

const headlineVariants = cva(
  "font-serif",
  {
    variants: {
      size: {
        default: "text-[clamp(1.5rem,2.5vw,2.25rem)] leading-[1.2] tracking-[-0.01em]",
        title: "text-3xl md:text-4xl leading-snug",
      },
      tone: {
        default: "text-neutral-900",
        muted:   "text-neutral-500",
        inverse: "text-white",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      size:  "default",
      tone:  "default",
      align: "left",
    },
  }
)

interface HeadlineProps extends VariantProps<typeof headlineVariants> {
  as?: HeadingElement
  children: React.ReactNode
  className?: string
}

export function Headline({ as: Tag = "h2", size, tone, align, children, className }: HeadlineProps) {
  return (
    <Tag className={cn(headlineVariants({ size, tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── SectionTitle ──────────────────────────────────────────────────────────────
// Card / sub-section heading.
// Token: typeScale.subtitle (default) · CategoryCard scale (compact)
//
// size="default" → font-serif text-2xl md:text-3xl leading-snug
// size="compact" → font-serif text-base md:text-lg leading-tight tracking-tight
// size="card"    → font-serif text-xl leading-snug font-medium
// size="section" → font-serif text-3xl
//   Compact preserves CategoryCard's existing title scale exactly.
//   Card preserves brand-card title styling without leaking weight/color classes.
//   Section preserves repeated category section headings.

const sectionTitleVariants = cva(
  "font-serif",
  {
    variants: {
      size: {
        default: "text-2xl md:text-3xl leading-snug",
        compact: "text-base md:text-lg leading-tight tracking-tight",
        card: "text-xl leading-snug font-medium",
        section: "text-3xl",
      },
      tone: {
        default: "text-neutral-900",
        muted:   "text-neutral-500",
        inverse: "text-white",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      size:  "default",
      tone:  "default",
      align: "left",
    },
  }
)

interface SectionTitleProps extends VariantProps<typeof sectionTitleVariants> {
  as?: HeadingElement
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ as: Tag = "h3", size, tone, align, children, className }: SectionTitleProps) {
  return (
    <Tag className={cn(sectionTitleVariants({ size, tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── Subheading ───────────────────────────────────────────────────────────────
// Subsection heading between Headline and card-level headings.
// font-serif · text-xl md:text-2xl · leading-snug
// Use for: subsection introductions, content group headers, supporting headings.

const subheadingVariants = cva(
  "font-serif text-xl md:text-2xl leading-snug",
  {
    variants: {
      tone: {
        default: "text-neutral-900",
        muted:   "text-neutral-500",
        inverse: "text-white",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      tone:  "default",
      align: "left",
    },
  }
)

interface SubheadingProps extends VariantProps<typeof subheadingVariants> {
  as?: HeadingElement
  children: React.ReactNode
  className?: string
}

export function Subheading({ as: Tag = "h3", tone, align, children, className }: SubheadingProps) {
  return (
    <Tag className={cn(subheadingVariants({ tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── CardHeading ──────────────────────────────────────────────────────────────
// Card-level heading for discovery cards, list items, content blocks.
// Token: typeScale.cardTitle
// font-serif · text-lg md:text-xl · leading-snug
// Use for: product cards, program cards, editorial items, brand cards.
// Migration target for legacy CardTitle.

const cardHeadingVariants = cva(
  "font-serif text-lg md:text-xl leading-snug",
  {
    variants: {
      tone: {
        default: "text-neutral-900",
        muted:   "text-neutral-500",
        inverse: "text-white",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      tone:  "default",
      align: "left",
    },
  }
)

interface CardHeadingProps extends VariantProps<typeof cardHeadingVariants> {
  as?: HeadingElement
  children: React.ReactNode
  className?: string
}

export function CardHeading({ as: Tag = "h4", tone, align, children, className }: CardHeadingProps) {
  return (
    <Tag className={cn(cardHeadingVariants({ tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── Body ──────────────────────────────────────────────────────────────────────
// Running prose and price/value display.
// Token: typeScale.text
// font-sans · text-base · leading-relaxed

const bodyVariants = cva(
  "font-sans text-base leading-relaxed",
  {
    variants: {
      tone: {
        default: "text-neutral-600",
        muted:   "text-neutral-500",
        inverse: "text-white/90",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      tone:  "default",
      align: "left",
    },
  }
)

interface BodyProps extends VariantProps<typeof bodyVariants> {
  as?: BlockElement
  children: React.ReactNode
  className?: string
}

export function Body({ as: Tag = "p", tone, align, children, className }: BodyProps) {
  return (
    <Tag className={cn(bodyVariants({ tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── Meta ──────────────────────────────────────────────────────────────────────
// Editorial labels, eyebrows, section markers, brand identifiers.
// Token: fluidTypeScale.meta
// font-sans · text-[0.7rem] · tracking-[0.2em] · uppercase
//
// SCOPE: tightly constrained to editorial label roles.
// Intended for: brand names above product titles, section eyebrows, designer tags.
// Do NOT use for: helper text, timestamps, status labels, or arbitrary small text.

const metaVariants = cva(
  "font-sans text-[0.7rem] tracking-[0.2em] uppercase",
  {
    variants: {
      tone: {
        default: "text-neutral-400",
        muted:   "text-neutral-300",
        inverse: "text-white/80",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      tone:  "default",
      align: "left",
    },
  }
)

interface MetaProps extends VariantProps<typeof metaVariants> {
  as?: InlineElement
  children: React.ReactNode
  className?: string
}

export function Meta({ as: Tag = "span", tone, align, children, className }: MetaProps) {
  return (
    <Tag className={cn(metaVariants({ tone, align }), className)}>
      {children}
    </Tag>
  )
}

// ── Caption ───────────────────────────────────────────────────────────────────
// Secondary captions and supplementary descriptors.
// Token: typeScale.caption
// font-sans · text-sm · tracking-wide · uppercase
//
// Supersedes the legacy Caption export.
// Use for: taglines beneath brand names, category subtitles, image captions.
// variant="plain" preserves non-uppercase secondary captions such as counts.

const captionVariants = cva(
  "font-sans text-sm",
  {
    variants: {
      variant: {
        editorial: "tracking-wide uppercase",
        plain: "tracking-normal normal-case",
      },
      tone: {
        default: "text-neutral-400",
        secondary: "text-neutral-500",
        muted:   "text-neutral-300",
        inverse: "text-white/80",
      },
      align: {
        left:   "text-left",
        center: "text-center",
        right:  "text-right",
      },
    },
    defaultVariants: {
      variant: "editorial",
      tone:  "default",
      align: "left",
    },
  }
)

interface CaptionProps extends VariantProps<typeof captionVariants> {
  as?: InlineElement
  children: React.ReactNode
  className?: string
}

export function Caption({ as: Tag = "span", variant, tone, align, children, className }: CaptionProps) {
  return (
    <Tag className={cn(captionVariants({ variant, tone, align }), className)}>
      {children}
    </Tag>
  )
}
