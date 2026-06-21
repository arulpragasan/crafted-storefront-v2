import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { Body, Caption, Meta, SectionTitle } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import type { Category } from "@/lib/api/categories"
import {
  imagePresentationClass,
  overlayPresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

type PrimaryCategoryAtlasProps = {
  categories: Category[]
}

export function PrimaryCategoryAtlas({
  categories,
}: PrimaryCategoryAtlasProps) {
  if (categories.length === 0) {
    return (
      <div className="py-24 text-center">
        <Caption variant="plain" tone="secondary">
          No categories are available yet.
        </Caption>
      </div>
    )
  }

  return (
    <div className="space-y-12 md:space-y-16">
      <div className="max-w-3xl space-y-4">
        <Meta>Primary Atlas</Meta>

        <SectionTitle as="h2" size="section">
          Explore category worlds
        </SectionTitle>

        <Body>
          Move through distinct creative worlds before refining by theme,
          creator, or collection.
        </Body>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={category.href}
            className="group block"
          >
            <article className="space-y-5">
              <div
                className={clsx(
                  "relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100",
                  surfacePresentationClass.imageNeutral
                )}
              >
                <Image
                  src={getImageUrl(category.imageUrl)}
                  alt={category.name}
                  fill
                  priority={index < 3}
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className={clsx(
                    imagePresentationClass.cover,
                    imagePresentationClass.hoverZoomEaseOut
                  )}
                />

                <div className={overlayPresentationClass.tileHoverWash} />
              </div>

              <div className="space-y-2">
                <SectionTitle as="h3" size="default">
                  {category.name}
                </SectionTitle>

                <Body>
                  {category.description}
                </Body>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}