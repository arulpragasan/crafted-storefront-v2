"use client"

import clsx from "clsx"
import Link from "next/link"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import { Caption, SectionTitle } from "@/components/ui/Typography"
import {
  imagePresentationClass,
  overlayPresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

type Brand = {
  name: string
  slug: string
  product_count: number
  logo_url: string | null
  banner_url: string | null
  top_products: { name?: string; image_url?: string }[]
}

export function FeaturedBrandCard({ brand }: { brand: Brand }) {
  const products = brand.top_products || []
  const hasFullCollage = products.length >= 3

  const productNames = products
    .filter((p) => p.name)
    .slice(0, 3)
    .map((p) => p.name)

  return (
    <Link href={`/brands/${brand.slug}`} className="group block">
      <div
        className={clsx(
          "relative h-[420px] md:h-[460px] w-full overflow-hidden md:rounded-xl",
          surfacePresentationClass.imageNeutral
        )}
      >
        
        {/* CASE 1: Full collage */}
        {hasFullCollage && (
          <div className="grid h-full w-full grid-cols-3">
            {products.slice(0, 3).map((p, i) => (
              <img
                key={i}
                src={getImageUrl(p.image_url)}
                alt={brand.name}
                className={clsx(
                  "h-full w-full",
                  imagePresentationClass.cover,
                  imagePresentationClass.hoverZoom
                )}
              />
            ))}
          </div>
        )}

        {/* CASE 2: Banner fallback */}
        {!hasFullCollage && brand.banner_url && (
          <img
            src={getImageUrl(brand.banner_url)}
            alt={brand.name}
            className={clsx(
              "h-full w-full",
              imagePresentationClass.cover,
              imagePresentationClass.hoverZoom
            )}
          />
        )}

        {/* CASE 3: Single product fallback */}
        {!hasFullCollage && !brand.banner_url && products[0]?.image_url && (
          <img
            src={getImageUrl(products[0].image_url)}
            alt={brand.name}
            className={clsx(
              "h-full w-full",
              imagePresentationClass.cover,
              imagePresentationClass.hoverZoom
            )}
          />
        )}

        {/* CASE 4: Empty fallback */}
        {!hasFullCollage &&
          !brand.banner_url &&
          !products[0]?.image_url && (
            <div
              className={clsx(
                "flex h-full items-center justify-center",
                surfacePresentationClass.imageEmpty
              )}
            >
              <span className="text-6xl text-neutral-400">
                {brand.name.charAt(0)}
              </span>
            </div>
          )}

        {/* Gradient */}
        <div className={overlayPresentationClass.featuredBrandGradient} />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <div className="flex items-end justify-between">
            <div>
              <SectionTitle as="h4" size="card" tone="inverse">
                {brand.name}
              </SectionTitle>

              {productNames.length > 0 && (
                <p className="text-xs text-white/70 mt-1 line-clamp-1">
                  {productNames.join(", ")}
                </p>
              )}

              <Caption variant="plain" tone="inverse">
                {brand.product_count} pieces
              </Caption>
            </div>

            {brand.logo_url && (
              <img
                src={getImageUrl(brand.logo_url)}
                alt={brand.name}
                className="h-10 w-10 rounded-full bg-white/90 object-contain p-1"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
