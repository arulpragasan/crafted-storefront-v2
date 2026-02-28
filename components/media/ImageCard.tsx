"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { hoverImageZoom } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"

type ImageCardProps = {
  title: string
  subtitle?: string
  image: string

  /**
   * Whole card navigation
   */
  href?: string

  /**
   * Layout style
   */
  aspect?: "portrait" | "square" | "landscape"

  /**
   * Priority image for above-the-fold
   */
  priority?: boolean

  className?: string
}

/*
  Crafted ImageCard Philosophy

  - image dominates (80%+)
  - minimal typography
  - entire card clickable
  - subtle motion only
  - no borders/shadows/buttons
  - feels like editorial tile

  Used for:
  - Categories
  - Landing discovery tiles
*/

export function ImageCard({
  title,
  subtitle,
  image,
  href,
  aspect = "portrait",
  priority = false,
  className,
}: ImageCardProps) {
  // -------------------------
  // aspect ratios (editorial)
  // -------------------------
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "landscape"
      ? "aspect-[4/3]"
      : "aspect-[3/4]" // portrait default

  const Wrapper: React.ElementType = href ? Link : "div"

  return (
    <Wrapper
      href={href ?? ""}
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
              alt={title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 33vw"
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
              text-base md:text-lg
              leading-tight
              tracking-tight
            "
          >
            {title}
          </h3>

          {subtitle && (
            <p className="text-xs text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>
      </article>
    </Wrapper>
  )
}