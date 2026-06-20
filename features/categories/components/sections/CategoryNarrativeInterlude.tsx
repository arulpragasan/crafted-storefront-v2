import Image from "next/image"
import clsx from "clsx"
import { Body, Headline, Meta } from "@/components/ui/Typography"
import { getImageUrl } from "@/lib/utils/getImageUrl"
import type { Category } from "@/lib/api/categories"
import {
  imagePresentationClass,
  surfacePresentationClass,
} from "@/styles/design-system/presentation"

type CategoryNarrativeInterludeProps = {
  featureCategory?: Category
}

export function CategoryNarrativeInterlude({
  featureCategory,
}: CategoryNarrativeInterludeProps) {
  return (
    <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16">
      <div className="space-y-7">
        <Meta>In Practice</Meta>

        <Headline as="h2" className="max-w-xl">
          Crafted for slower living and intentional celebration.
        </Headline>

        <Body className="max-w-lg">
          Each category is treated as a setting rather than a shelf: a place to notice proportion, texture, and the quiet relationship between garment and occasion.
        </Body>
      </div>

      <div
        className={clsx(
          "relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 md:aspect-[5/4]",
          surfacePresentationClass.imageNeutral
        )}
      >
        <Image
          src={getImageUrl(featureCategory?.imageUrl)}
          alt={featureCategory?.name ?? "Crafted editorial category study"}
          fill
          sizes="(min-width: 768px) 46vw, 100vw"
          className={imagePresentationClass.cover}
        />
      </div>
    </div>
  )
}
