"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { hoverImageZoom } from "@/lib/motion/presets"
import clsx from "clsx"
import React from "react"

type ProductCardProps = {
  name: string
  image: string
  href: string

  brand?: string
  price?: number | string

  priority?: boolean
  className?: string
}

/*
  Crafted ProductCard Philosophy

  - image first
  - minimal info only
  - no ecommerce clutter
  - calm typography
  - subtle motion only
  - feels editorial, not marketplace

  DO NOT:
  - add ratings
  - add badges
  - add buttons
  - add add-to-cart
*/

export function ProductCard({
  name,
  brand,
  price,
  image,
  href,
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group block focus:outline-none", className)}
    >
      <article className="space-y-5">
        {/* ========================
            Image
        ======================== */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <motion.div
            {...hoverImageZoom}
            className="h-full w-full"
          >
            <Image
              src={image}
              alt={name}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* ========================
            Info
        ======================== */}
        <div className="space-y-1">
          {brand && (
            <p
              className="
                text-[11px]
                uppercase
                tracking-wider
                text-neutral-500
              "
            >
              {brand}
            </p>
          )}

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

          {price !== undefined && (
            <p className="text-sm text-neutral-700">
              {typeof price === "number"
                ? `₹${price.toLocaleString()}`
                : price}
            </p>
          )}
        </div>
      </article>
    </Link>
  )
}