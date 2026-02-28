"use client"

import { motion } from "framer-motion"
import { fadeRise, viewportOnce } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"

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
      spacingClass = "py-24 md:py-32"
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
      spacingClass = "py-24 md:py-32"
      toneClass = "bg-neutral-50"
      break

    /* ------------------------------------------
       Feature / storytelling
    ------------------------------------------ */
    case "feature":
      spacingClass = "py-32 md:py-40"
      break

    /* ------------------------------------------
       Tight sections
    ------------------------------------------ */
    case "tight":
      spacingClass = "py-14 md:py-18"
      break

    /* ------------------------------------------
       No spacing
    ------------------------------------------ */
    case "flush":
      spacingClass = ""
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