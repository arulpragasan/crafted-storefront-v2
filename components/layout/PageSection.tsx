import React from "react"
import { Section } from "./Section"
import type { sectionRhythmClass } from "@/styles/design-system/spacing"

type PageSectionRhythm =
  | "default"
  | "muted"
  | "feature"
  | "tight"
  | "editorial"
  | "flush"

type PageSectionProps = {
  children: React.ReactNode
  rhythm?: PageSectionRhythm
  tone?: "default" | "muted"
  className?: string
}

const rhythmMap: Record<PageSectionRhythm, keyof typeof sectionRhythmClass> = {
  default:   "default",
  muted:     "muted",
  feature:   "feature",
  tight:     "compact",
  editorial: "editorial",
  flush:     "flush",
}

export function PageSection({
  children,
  rhythm = "default",
  tone = "default",
  className,
}: PageSectionProps) {
  return (
    <Section
      rhythm={rhythmMap[rhythm]}
      tone={tone}
      className={className}
    >
      {children}
    </Section>
  )
}
