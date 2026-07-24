"use client"

import clsx from "clsx"
import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption, SectionTitle } from "@/components/ui/Typography"
import {
  imagePresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"
import { transitionClass } from "@/styles/design-system/motion"

type Brand = {
  name: string
  slug: string
  product_count: number
  logo_url: string | null
  banner_url: string | null
  top_products?: { image_url?: string | null }[]
}

export function BrandCard({ brand }: { brand: Brand }) {
  const topProducts = brand.top_products ?? []

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className={clsx(
        "group block overflow-hidden rounded-2xl bg-white",
        "border border-transparent hover:border-neutral-200",
        transitionClass.surfaceFeedback
      )}
    >
      {/* Image */}
      <div
        className={clsx(
          "relative h-48 w-full overflow-hidden",
          surfacePresentationClass.imageNeutral
        )}
      >
        {brand.banner_url ? (
          <img
            src={getImageUrl(brand.banner_url)}
            alt={brand.name}
            className={clsx(
              "h-full w-full",
              imagePresentationClass.cover,
              imagePresentationClass.hoverZoomEaseOut
            )}
          />
        ) : (
          <div
            className={clsx(
              "flex h-full items-center justify-center",
              surfacePresentationClass.imageEmpty
            )}
          >
            <span className="text-3xl text-neutral-400">
              {brand.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Logo + Info */}
        <div className="flex items-center gap-3">
          {brand.logo_url ? (
            <img
              src={getImageUrl(brand.logo_url)}
              alt={brand.name}
              className="
                h-9 w-9 rounded-full object-cover
                bg-white border border-neutral-200
              "
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-neutral-200" />
          )}

          <div className="min-w-0">
            <SectionTitle as="h4" size="card" className="truncate">
              {brand.name}
            </SectionTitle>
            <Caption variant="plain" tone="secondary">
              {brand.product_count} products
            </Caption>
          </div>
        </div>

        {/* Product previews */}
        {topProducts.length > 0 && (
          <div className="flex gap-2">
            {topProducts.slice(0, 3).map((p, i) => (
              <div
                key={i}
                className={clsx(
                  "h-12 w-12 overflow-hidden rounded-md",
                  surfacePresentationClass.imageNeutral
                )}
              >
                <img
                  src={getImageUrl(p.image_url)}
                  alt=""
                  className={clsx("h-full w-full", imagePresentationClass.cover)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
