import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

import { Headline, CardHeading, Caption } from "@/components/ui/Typography"
import {
  surfacePresentationClass,
  imagePresentationClass,
} from "@/styles/design-system/presentation"
import { cardContentSpacingClass } from "@/styles/design-system/spacing"
import type { Theme } from "@/lib/api/categories"

type ExploreThemesProps = {
  slug: string
  themes: Theme[]
}

export default function ExploreThemes({ slug, themes }: ExploreThemesProps) {
  if (!themes.length) return null

  return (
    <>
      <Headline as="h2" className="mb-10 md:mb-16">
        Explore by Theme
      </Headline>

      {/* Dominant 2-column editorial grid */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 md:gap-x-14">
        {themes.map((theme) => (
          <Link
            key={theme.slug}
            href={`/categories/${slug}?theme=${theme.slug}`}
            className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <article className={cardContentSpacingClass.mediaToCopy}>
              <div className={clsx("relative aspect-[4/3]", surfacePresentationClass.imageTile)}>
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className={clsx(
                    imagePresentationClass.cover,
                    imagePresentationClass.hoverZoomEaseOut,
                    "motion-reduce:transition-none motion-reduce:transform-none"
                  )}
                />
              </div>

              <div className={cardContentSpacingClass.copyStack}>
                <CardHeading as="h3">{theme.name}</CardHeading>
                {theme.descriptor && (
                  <Caption variant="plain" tone="secondary">
                    {theme.descriptor}
                  </Caption>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
