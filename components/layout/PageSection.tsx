import clsx from "clsx"
import React from "react"
import { pageSectionSpacingClass } from "@/styles/design-system/spacing"

type PageSectionRhythm = keyof typeof pageSectionSpacingClass

type PageSectionProps = {
  children: React.ReactNode
  rhythm?: PageSectionRhythm
  tone?: "default" | "muted"
  className?: string
}

export function PageSection({
  children,
  rhythm = "default",
  tone = "default",
  className,
}: PageSectionProps) {
  return (
    <section
      className={clsx(
        "relative w-full",
        pageSectionSpacingClass[rhythm],
        tone === "muted" && "bg-neutral-50",
        className
      )}
    >
      {children}
    </section>
  )
}
