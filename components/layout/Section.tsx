import clsx from "clsx"
import React from "react"
import { sectionRhythmClass, sectionToneClass } from "@/styles/design-system/spacing"

// ─── Foundation Types ────────────────────────────────────────────────────────

type SectionRhythm = keyof typeof sectionRhythmClass

type SectionTone = keyof typeof sectionToneClass

// ─── Legacy Variant (backward compat) ───────────────────────────────────────

type SectionVariant =
  | "default"
  | "hero"
  | "muted"
  | "feature"
  | "tight"
  | "flush"

type SectionProps = {
  children: React.ReactNode
  variant?: SectionVariant
  rhythm?: SectionRhythm
  tone?: SectionTone
  noMotion?: boolean
  className?: string
}

// ─── Legacy variant → rhythm/tone translation ────────────────────────────────

function resolveVariant(variant: SectionVariant): { rhythm: string; tone: string } {
  switch (variant) {
    case "hero":
      return { rhythm: "min-h-screen flex items-center", tone: "" }
    case "muted":
      return { rhythm: sectionRhythmClass.muted, tone: sectionToneClass.muted }
    case "feature":
      return { rhythm: sectionRhythmClass.feature, tone: "" }
    case "tight":
      return { rhythm: sectionRhythmClass.compact, tone: "" }
    case "flush":
      return { rhythm: sectionRhythmClass.flush, tone: "" }
    default:
      return { rhythm: sectionRhythmClass.default, tone: "" }
  }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function Section({
  children,
  variant,
  rhythm,
  tone,
  className,
}: SectionProps) {
  let spacingClass: string
  let toneClass: string

  if (rhythm !== undefined || tone !== undefined) {
    spacingClass = sectionRhythmClass[rhythm ?? "default"]
    toneClass = sectionToneClass[tone ?? "default"]
  } else {
    const resolved = resolveVariant(variant ?? "default")
    spacingClass = resolved.rhythm
    toneClass = resolved.tone
  }

  return (
    <section
      className={clsx(
        "relative w-full",
        spacingClass,
        toneClass,
        className
      )}
    >
      {children}
    </section>
  )
}
