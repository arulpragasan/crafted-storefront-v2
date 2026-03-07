"use client"

import { ImageTile } from "@/components/ui/ImageTile"
import Link from "next/link"
import clsx from "clsx"
import React from "react"

type ProductCardProps = {
  name: string
  image: string
  href: string

  brand?: string
  price?: number | string

  aspect?: "portrait" | "square" | "landscape"

  priority?: boolean
  className?: string
}

export function ProductCard({
  name,
  brand,
  price,
  image,
  href,
  aspect = "portrait",
  priority = false,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={clsx("group block focus:outline-none", className)}
    >
      <article className="space-y-5">

        <ImageTile
          src={image}
          alt={name}
          aspect={aspect}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="space-y-1">
          {brand && (
            <p className="text-[11px] uppercase tracking-wider text-neutral-500">
              {brand}
            </p>
          )}

          <h3 className="font-serif text-lg md:text-xl leading-tight tracking-tight">
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