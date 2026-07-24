"use client"

import clsx from "clsx"
import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"

type ProductCardProps = {
  name: string
  image: string | null | undefined
  price?: number | string | null
  href: string
  aspect?: "portrait" | "square"
  brand?: string
  showPrice?: boolean
  className?: string
}

export function ProductCard({
  name,
  image,
  price,
  href,
  aspect = "portrait",
  brand,
  showPrice = true,
  className,
}: ProductCardProps) {
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : "aspect-square"
  const formattedPrice = typeof price === "number" ? "$" + price.toLocaleString() : price

  return (
    <Link href={href} className={clsx("group block", className)}>
      {/* Image */}
      <div
        className={clsx(
          "relative w-full overflow-hidden rounded-lg bg-neutral-100",
          aspectClass
        )}
      >
        {image ? (
          <img
            src={getImageUrl(image)}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-2xl text-neutral-300">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="mt-3 space-y-0.5">
        {brand && (
          <p className="text-xs text-neutral-500 uppercase tracking-wide">
            {brand}
          </p>
        )}

        <p className="text-sm text-neutral-900 group-hover:text-neutral-600 transition line-clamp-1">
          {name}
        </p>

        {showPrice && price != null && (
          <p className="text-sm text-neutral-500">
            {formattedPrice}
          </p>
        )}
      </div>
    </Link>
  )
}
