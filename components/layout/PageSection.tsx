import React from "react"
import { Section } from "./Section"

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
  className?: string
}

const variantMap: Record<
  PageSectionRhythm,
  "default" | "muted" | "feature" | "tight" | "flush"
> = {
  default: "default",
  muted: "muted",
  feature: "feature",
  tight: "tight",
  editorial: "default", // closest equivalent
  flush: "flush",
}

export function PageSection({
  children,
  rhythm = "default",
  className,
}: PageSectionProps) {
  return (
    <Section
      variant={variantMap[rhythm]}
      className={className}
    >
      {children}
    </Section>
  )
}