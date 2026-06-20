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

function cardFrameClass(index: number) {
  const rhythm = index % 5

  if (rhythm === 0) return "lg:col-span-7"
  if (rhythm === 1) return "lg:col-span-5 lg:mt-24"
  if (rhythm === 2) return "lg:col-span-5"
  if (rhythm === 3) return "lg:col-span-7 lg:mt-20"
  return "lg:col-span-12"
}

function imageRatioClass(index: number) {
  const rhythm = index % 5

  if (rhythm === 0) return "aspect-[4/5] md:aspect-[5/6]"
  if (rhythm === 1) return "aspect-[3/4]"
  if (rhythm === 2) return "aspect-[4/5]"
  if (rhythm === 3) return "aspect-[16/11]"
  return "aspect-[16/10]"
}

function subcategoryPreview(category: Category) {
  return category.subcategories.slice(0, 4)
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
    <div className="space-y-16 md:space-y-24">
      <div className="max-w-3xl space-y-5">
        <Meta>Primary Atlas</Meta>
        <SectionTitle as="h2" size="section">
          Category worlds for slower discovery.
        </SectionTitle>
      </div>

      <div className="grid grid-cols-1 gap-20 md:gap-24 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-28">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={category.href}
            className={clsx("group block", cardFrameClass(index))}
          >
            <article className="space-y-6">
              <div
                className={clsx(
                  "relative -mx-5 overflow-hidden bg-neutral-100 md:mx-0 md:rounded-2xl",
                  imageRatioClass(index),
                  surfacePresentationClass.imageNeutral
                )}
              >
                <Image
                  src={getImageUrl(category.imageUrl)}
                  alt={category.name}
                  fill
                  priority={index < 2}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className={clsx(
                    imagePresentationClass.cover,
                    imagePresentationClass.hoverZoomEaseOut
                  )}
                />
                <div className={overlayPresentationClass.tileHoverWash} />
              </div>

              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(180px,240px)] md:items-start">
                <div className="space-y-3">
                  <SectionTitle as="h3" size="default">
                    {category.name}
                  </SectionTitle>
                  <Body>{category.description}</Body>
                </div>

                {subcategoryPreview(category).length > 0 && (
                  <div className="space-y-3 md:pt-2">
                    <Caption>Explore Within</Caption>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 md:block md:space-y-2">
                      {subcategoryPreview(category).map((subcategory) => (
                        <Caption
                          key={subcategory.id}
                          as="span"
                          variant="plain"
                          tone="secondary"
                          className="block"
                        >
                          {subcategory.name}
                        </Caption>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
