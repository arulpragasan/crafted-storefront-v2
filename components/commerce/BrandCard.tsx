"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { hoverImageZoom } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"

type BrandCardProps = {
  name: string
  image: string
  href: string

  /**
   * Optional – allowed on landing only, NOT on index pages
   */
  tagline?: string

  /**
   * Editorial layout style
   * Default is portrait (fashion/editorial)
   */
  aspect?: "portrait" | "square" | "landscape"

  priority?: boolean
  className?: string
}

/*
  Crafted BrandCard Philosophy

  - campaign image dominates
  - minimal typography
  - emotional, not transactional
  - no ecommerce UI
  - feels like lookbook or poster

  Index usage rules:
  - always portrait
  - no tagline
*/

export function BrandCard({
  name,
  tagline,
  image,
  href,
  aspect = "portrait",
  priority = false,
  className,
}: BrandCardProps) {
  // -------------------------
  // editorial aspect ratios
  // -------------------------
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "landscape"
      ? "aspect-[4/3]"
      : "aspect-[3/4]" // default fashion/editorial

  return (
    <Link
      href={href}
      className={clsx("group block focus:outline-none", className)}
    >
      {/* Image + text should feel like ONE unit */}
      <article className="space-y-4">
        {/* ========================
            Image
        ======================== */}
        <div
          className={clsx(
            "relative overflow-hidden rounded-2xl",
            aspectClass
          )}
        >
          <motion.div
            {...hoverImageZoom}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* ========================
            Text
        ======================== */}
        <div className="space-y-1">
          <h3
            className="
              font-serif
              text-lg md:text-xl
              leading-tight
              tracking-tight
            "
          >
            {name}
          </h3>

          {tagline && (
            <p className="text-sm text-neutral-500 max-w-xs">
              {tagline}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}