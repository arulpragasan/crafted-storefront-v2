"use client"

import { motion } from "framer-motion"
import { fadeRise, viewportOnce } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"
import { pageSectionSpacingClass } from "@/styles/design-system/spacing"

type SectionVariant =
  | "default"   // standard section
  | "hero"      // full screen
  | "muted"     // light background
  | "feature"   // larger breathing space
  | "tight"     // compact
  | "flush"     // no spacing

type SectionProps = {
  children: React.ReactNode
  variant?: SectionVariant
  noMotion?: boolean
  className?: string
}

export function Section({
  children,
  variant = "default",
  noMotion = false,
  className,
}: SectionProps) {
  /* ======================================================
     Variant styles (semantic, not mechanical)
  ====================================================== */

  let spacingClass = ""
  let toneClass = ""

  switch (variant) {
    /* ------------------------------------------
       Default (most sections)
    ------------------------------------------ */
    case "default":
      spacingClass = pageSectionSpacingClass.default
      break

    /* ------------------------------------------
       Hero (full screen cinematic)
    ------------------------------------------ */
    case "hero":
      spacingClass = "min-h-screen flex items-center"
      break

    /* ------------------------------------------
       Muted background
    ------------------------------------------ */
    case "muted":
      spacingClass = pageSectionSpacingClass.muted
      toneClass = "bg-neutral-50"
      break

    /* ------------------------------------------
       Feature / storytelling
    ------------------------------------------ */
    case "feature":
      spacingClass = pageSectionSpacingClass.feature
      break

    /* ------------------------------------------
       Tight sections
    ------------------------------------------ */
    case "tight":
      spacingClass = pageSectionSpacingClass.tight
      break

    /* ------------------------------------------
       No spacing
    ------------------------------------------ */
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

  /* ======================================================
     Render
  ====================================================== */

  if (noMotion) {
    return <section className={baseClass}>{children}</section>
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
