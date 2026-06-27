import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

import {
  Headline,
  CardHeading,
  Caption,
} from "@/components/ui/Typography"

import { getImageUrl } from "@/lib/utils/getImageUrl"
import type { CategoryDetailSubcategory } from "@/lib/api/categories"

import {
  imagePresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

type ExploreSubcategoriesProps = {
  subcategories: CategoryDetailSubcategory[]
}

export default function ExploreSubcategories({
  subcategories,
}: ExploreSubcategoriesProps) {
  if (!subcategories.length) return null

  return (
    <section className="space-y-12 md:space-y-16">
      <div className="max-w-2xl">
        <Headline as="h2">
          Explore Within
        </Headline>

        <Caption
          variant="plain"
          tone="secondary"
          className="mt-3"
        >
          Begin with a creative direction before refining further.
        </Caption>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            href={`/products?subcategory=${subcategory.slug}`}
            className="group block"
          >
            <article className="space-y-5">
              <div
                className={clsx(
                  "relative aspect-[4/5] overflow-hidden rounded-2xl",
                  surfacePresentationClass.imageTile
                )}
              >
                {subcategory.media?.cover_image?.url ? (
                  <Image
                    src={getImageUrl(
                      subcategory.media.cover_image.url
                    )}
                    alt={subcategory.name}
                    fill
                    sizes="(min-width:1024px) 30vw, (min-width:768px) 45vw, 100vw"
                    className={clsx(
                      imagePresentationClass.cover,
                      imagePresentationClass.hoverZoomEaseOut
                    )}
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-100" />
                )}
              </div>

              <div className="space-y-2">
                <CardHeading as="h3">
                  {subcategory.name}
                </CardHeading>

                {subcategory.description && (
                  <Caption
                    variant="plain"
                    tone="secondary"
                  >
                    {subcategory.description}
                  </Caption>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}