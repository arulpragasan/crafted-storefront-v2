"use client"

import { motion } from "framer-motion"
import { fadeRise, viewportOnce } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"
import { pageSectionSpacingClass } from "@/styles/design-system/spacing"

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

  /**
   * Opt-in animation.
   *
   * Most discovery sections (categories, brands, products)
   * should remain static for smoother scrolling.
   */
  animated?: boolean

  className?: string
}

export function Section({
  children,
  variant = "default",
  animated = false,
  className,
}: SectionProps) {
  let spacingClass = ""
  let toneClass = ""

  switch (variant) {
    case "default":
      spacingClass = pageSectionSpacingClass.default
      break

    case "hero":
      spacingClass = "min-h-screen flex items-center"
      break

    case "muted":
      spacingClass = pageSectionSpacingClass.muted
      toneClass = "bg-neutral-50"
      break

    case "feature":
      spacingClass = pageSectionSpacingClass.feature
      break

    case "tight":
      spacingClass = pageSectionSpacingClass.tight
      break

    case "flush":
      spacingClass = pageSectionSpacingClass.flush
      break
  }

  const baseClass = clsx(
    "relative w-full",
    spacingClass,
    toneClass,
    className
  )

  if (!animated) {
    return (
      <section className={baseClass}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      variants={fadeRise}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={baseClass}
    >
      {children}
    </motion.section>
  )
}