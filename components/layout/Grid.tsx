"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"

type GridVariant =
  | "catalog"   // normal product grid
  | "lookbook"  // horizontal scroll strip
  | "feature"   // large 2-col grid
  | "list"      // vertical stack
  | "custom"

type GridProps = {
  children: React.ReactNode
  variant?: GridVariant
  columns?: number
  gap?: "tight" | "normal" | "loose"
  stagger?: boolean
  className?: string
}

export function Grid({
  children,
  variant = "catalog",
  columns = 3,
  gap = "normal",
  stagger = true,
  className,
}: GridProps) {
  /* ======================================================
     Gap styles
  ====================================================== */

  const gapClass =
    gap === "tight"
      ? "gap-4"
      : gap === "loose"
      ? "gap-10 md:gap-14"
      : "gap-6 md:gap-10"

  /* ======================================================
     Layout variants
  ====================================================== */

  let layoutClass = ""

  switch (variant) {
    /* ------------------------------------------
       Product catalog (default)
    ------------------------------------------ */
    case "catalog":
      layoutClass = clsx(
        "grid",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      )
      break

    /* ------------------------------------------
       Editorial lookbook (horizontal)
    ------------------------------------------ */
    case "lookbook":
      layoutClass = clsx(
        "flex overflow-x-auto",
        "snap-x snap-mandatory",
        "pb-2",
        "[&>*]:snap-start",
        "[&>*]:min-w-[75%]",
        "md:[&>*]:min-w-[40%]",
        "lg:[&>*]:min-w-[30%]"
      )
      break

    /* ------------------------------------------
       Feature grid (big cards)
    ------------------------------------------ */
    case "feature":
      layoutClass = clsx(
        "grid",
        "grid-cols-1 md:grid-cols-2"
      )
      break

    /* ------------------------------------------
       Vertical list (program/schedule)
    ------------------------------------------ */
    case "list":
      layoutClass = "flex flex-col"
      break

    /* ------------------------------------------
       Custom manual layout
    ------------------------------------------ */
    case "custom":
      layoutClass = clsx(
        "grid",
        `grid-cols-${columns}`
      )
      break
  }

  /* ======================================================
     Render
  ====================================================== */

  const baseClass = clsx(layoutClass, gapClass, className)

  if (!stagger) {
    return <div className={baseClass}>{children}</div>
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={baseClass}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={staggerItem}>{child}</motion.div>
      ))}
    </motion.div>
  )
}